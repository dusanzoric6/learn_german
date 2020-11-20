from gtts import gTTS
import playsound

tts = gTTS(text='der Flohmarkt', lang='de')
tts.save("word_for_speech.mp3")

playsound.playsound('word_for_speech.mp3', True)