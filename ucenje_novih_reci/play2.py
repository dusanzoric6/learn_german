import pygame
from IPython.display import Audio
import io
from gtts import gTTS
import mmap

...


def speak(data):
    tts = gTTS(text=data, lang='en')
    tts.save('speech.mp3')
    with open('speech.mp3') as f:
        m = mmap.mmap(f.fileno(), 0, access=mmap.ACCESS_READ)

    pygame.mixer.init()
    pygame.mixer.music.load(m)
    pygame.mixer.music.play()

    m.close()


speak("hello")