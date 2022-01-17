import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Badge from './components/Badge';
import Button from './components/Button';
import Footer from './components/Footer';
import Panel from './components/Panel';
import database from '@react-native-firebase/database';
import { IData } from './interfaces/IData';
import { IWord } from './interfaces/IWord';
import { styles } from './styles';

const App = () => {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [question, setQuestion] = useState<IData>();
  const [step, setStep] = useState(1);
  const [choose, setChoose] = useState(-1);
  const missingIndex: number[] = [];
  const phrase: IWord[] = [];

  // FETCH QEUSTION
  const fetchQuestion = () => {
    database().ref(`/questions/${questionIndex}`).on('value', snapshot => {
      if (!snapshot.val()) {
        setQuestionIndex(0);
        fetchQuestion()
      } else {
        setQuestion(snapshot.val())
      }
    });
  }

  useEffect(() => {
    fetchQuestion()
  }, [])

  // FETCH NEXT QUESTION
  useEffect(() => {
    fetchQuestion()
  }, [questionIndex])

  // PROCESS QUESTION
  const findWord = (): void => {
    question?.question.text.split(' ').map((word, index) => {

      if (word != question.question.textMissing.split(' ')[index - missingIndex.length]) {
        missingIndex.push(index)
        phrase.push({
          index: index,
          word: word,
          missing: true,
        })
      } else {
        phrase.push({
          index: index,
          word: word,
          missing: false,
        })
      }
    })
  }

  // CHECK IF RIGHUT ANSWER
  const checkQuestion = () => {
    if (question?.answers[choose].missing) {
      setStep(2)
    } else {
      setStep(3)
    }
  }

  // GO TO NEXT STEP
  const next = () => {
    setStep(1)
    setChoose(-1)
    setQuestionIndex(questionIndex + 1)
  }

  if (question) {
    findWord()
  }

  return (

    <View>
      <StatusBar translucent barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.navbar}></View>

        <Panel>
          <Text style={styles.title}>Fill the missing word</Text>
          <Text style={styles.questionTitle}>{question?.question.tile}</Text>
          <Text style={styles.questionText}>
            {phrase.map((item, key) => {
              if (item.missing && choose < 0) {
                return ` ___`
              } else if (item.missing && choose >= 0) {
                return < Badge key={key} onPress={() => { setChoose(-1) }} >{question?.answers[choose].text}</Badge>
              } else {
                return ` ${item.word}`
              }
            })}
          </Text>

          <View style={styles.answers}>
            {question?.answers.map((answer, key) => (
              < Badge key={key} onPress={() => { setChoose(key) }} >{answer.text}</Badge>
            ))}
          </View>
        </Panel>

        {
          step == 1 && (
            <Footer backgroundColor="#3b6c81">
              <Text style={styles.footerText}>{' '}</Text>
              {choose > -1 ?
                (<Button backgroundColor="#01e0e8" color="white" onPress={() => { checkQuestion() }} >CHECK ANSWER</Button>) :
                (<Button backgroundColor="#6392a6" color="white" onPress={() => { }} >CONTINUE</Button>)
              }
            </Footer>
          )
        }

        {
          step == 2 && (
            <Footer backgroundColor="#01e0e8">
              <Text style={styles.footerText}>Great Job!</Text>
              <Button backgroundColor="white" color="#01e0e8" onPress={() => { next() }} >CONTINUE</Button>
            </Footer>
          )
        }

        {
          step == 3 && (
            <Footer backgroundColor="#ff8689">
              <Text style={styles.footerText}>Answer: {question?.answers.map((answer) => {
                if (answer.missing == true)
                  return answer.text
              })
              }!</Text>
              <Button backgroundColor="white" color="#ff8689" onPress={() => { next() }} >CONTINUE</Button>
            </Footer>
          )
        }

      </View >
    </View >

  );
};

export default App;
