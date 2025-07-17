from gtts import gTTS
import io
import pygame
import requests
import pyttsx3


def is_on_vpn():
    url = "https://gitlab.common.cloud.riag.digital/riag/store/merchandise-mgmt/sto-ordering/store-order/store-ordering-ui/-/releases"
    try:
        response = requests.get(url, timeout=5)
        if response.status_code == 200:
            print(response.status_code)
            return True
        else:
            print(response.status_code)
            return False
    except requests.exceptions.RequestException as e:
        print(e)
        return False

_is_vpn = is_on_vpn()

def speak_german(word):
    if _is_vpn:   # run bad pronunciation
        engine = pyttsx3.init()
        engine.setProperty('rate', 110)
        for voice in engine.getProperty('voices'):
            if 'de' in voice.languages or 'german' in voice.name.lower():
                engine.setProperty('voice', voice.id)
                break

        engine.say(word)
        engine.runAndWait()
    else: # run good pronunciation
        tts = gTTS(text=word, lang='de')
        fp = io.BytesIO()
        tts.write_to_fp(fp)
        fp.seek(0)

        pygame.mixer.init()
        pygame.mixer.music.load(fp, 'mp3')
        pygame.mixer.music.play()

        while pygame.mixer.music.get_busy():
            continue

