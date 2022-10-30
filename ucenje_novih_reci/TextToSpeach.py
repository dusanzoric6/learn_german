import pyttsx3

engine = pyttsx3.init()
engine.setProperty('voice', 'HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Speech\\Voices\\Tokens\\TTS_MS_ES-ES_HELENA_11.0')
engine.setProperty('rate', 110)


def say_the_word_in_spanish(word):
    engine.say(word)
    engine.runAndWait()
