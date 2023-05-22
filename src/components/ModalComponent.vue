<template>
  <div class="containerbox">
    <div class="info-row-container">
      <div class="info-row1">
        <task_button class="infobutton" @click="showText(1);" task_buttontext="Grå stær"></task_button>
        <task_button class="infobutton" @click="showText(2);" task_buttontext="Grøn stær"></task_button>
        <task_button class="infobutton" @click="showText(3);" task_buttontext="Diabetisk øjensygdom"></task_button>
        <task_button class="infobutton" @click="showText(4);" task_buttontext="Aldersplætter på nethinden - AMD"></task_button>
      </div>

      <div class="dialogbox" :class="{ synlighed: isToggled }">
        <p class="info-text" v-html="currentText"></p>
      </div>

      <div class="info-row2">
        <task_button class="infobutton" @click="showText(5);" task_buttontext="Få en øjenoperation"></task_button>
        <task_button class="infobutton" @click="showText(6);" task_buttontext="Club Brillebaren"></task_button>
        <task_button class="infobutton" @click="showText(7);" task_buttontext="Tilskud"></task_button>
        <task_button class="infobutton" @click="showText(8);" task_buttontext="Afbetaling"></task_button>
      </div>
    </div>
  </div>
</template>

<script>
import task_button from './task_button.vue'

export default {
  data() {
    return {
      currentText: '',
      isToggled: true // Start with dialog box hidden
    };
  },
  components: {
    task_button
  },

  methods: {
  showText(textNumber) {
    this.myFunction(); // Call myFunction to remove .synlighed class
    if (textNumber === 1) {
      this.currentText = text1;
    } else if (textNumber === 2) {
      this.currentText = text2;
    } else if (textNumber === 3) {
      this.currentText = text3;
    } else if (textNumber === 4) {
      this.currentText = text4;
    } else if (textNumber === 5) {
      this.currentText = text5;
    } else if (textNumber === 6) {
      this.currentText = text6;
    } else if (textNumber === 7) {
      this.currentText = text7;
    } else if (textNumber === 8) {
      this.currentText = text8;
    }
  },
  myFunction() {
    const dialogbox = document.querySelector('.dialogbox');
    dialogbox.classList.remove('synlighed');
  }

  },
};
  

var text1 = 'Grå stær udvikler sig normalt langsomt over tid og påvirker ofte begge øjne, men i forskellig grad. Symptomerne kan omfatte sløret eller diset syn, vanskeligheder med at se i svagt lys, øget følsomhed over for lys, ændringer i farvesyn og problemer med nattesyn. Nogle mennesker oplever også dobbeltsyn i det påvirkede øje.<br><br>Behandlingen for grå stær indebærer normalt kirurgi for at fjerne den uklare linse og erstatte den med en kunstig intraokulær linse (IOL).<br><br>Snak med os i butikken, vi rådgiver dig gerne mere om hvad grå stær er for en øjensygdom.';
var text2 = 'Grøn stær, også kendt som glaukom, er en øjenlidelse, der primært påvirker synsnerven og kan forårsage progressiv synstab. Det er normalt forbundet med en stigning i trykket inde i øjet, kendt som intraokulært tryk, som kan beskadige synsnerven over tid. <br><br>Der er flere former for glaukom, herunder primær åbenvinklet glaukom, som er den mest almindelige form, og akut vinkellukningsglaukom, som er mindre almindelig, men kan være akut og kræver øjeblikkelig lægehjælp. <br><br>Snak med os i butikken, så rådgiver vi gerne omkring hvad grøn stær er for en sygdom.';
var text3 = 'Diabetisk øjensygdom, også kendt som diabetisk retinopati, er en øjenkomplikation, der kan opstå som følge af langvarig diabetes. Det påvirker øjets nethinde, som er det lysfølsomme væv på bagsiden af øjet, der er ansvarligt for at opfange lys og sende visuelle signaler til hjernen. <br>Diabetisk øjensygdom udvikler sig gradvist over tid og er primært forårsaget af skader på blodkarrene i nethinden. <br><br>Ved diabetes kan vedvarende højt blodsukkerniveau skade de små blodkar i kroppen, herunder dem i nethinden.';
var text4 = 'Alderspletter på nethinden, også kendt som aldersrelateret maculadegeneration (AMD), er en øjenlidelse, der påvirker den centrale del af nethinden, der kaldes macula. Macula er ansvarlig for skarpt syn og er afgørende for aktiviteter som læsning, kørsel og genkendelse af ansigter.<br><br> Symptomerne på AMD kan variere, men de omfatter typisk sløret eller nedsat central syn, ændringer i farvesynet og vanskeligheder ved at genkende ansigter eller læse småt print. Det perifere syn påvirkes normalt ikke, så synstabet er centreret.<br>Vi i Brillebaren kan rådgive dig videre omkring øjensygdommen AMD.';
var text5 = 'Med EuroEyes øjenoperation kan du helt smide behovet for briller. <br><br><li>Forløbet lyder som følgende<br><li>Samtale hos Brillebaren om egnethed<br><li>Forundersøgelser hos EuroEyes<br><li>Operation<br><br>Brillebaren samarbejder med EuroEyes International Eye Clinics  som er en privatejet øjenklinikgruppe med 28 klinikker i hhv. Danmark, Tyskland og Kina.<br>Brillebaren laver for- og efterundersøgelser for disse operationer.<br><br>Brillebaren rådgiver dig gerne videre i processen.';
var text6 = 'Club Brillebaren er til dig der vil have flere briller at vælge imellem!<br><br>Som medlem af Club Brillebaren lejer du hver brille/solbrille med styrke til en udbetaling på 35% af brillens totalpris og betaler herefter et fast månedligt beløb. Club Brillebaren gælder alle briller og solbriller i butikken, både briller med enkeltstyrke, flerstyrkebriller og solbriller med styrke.<br><br>Vi har ingen skjulte og uforudsete gebyrer. Prisen er altid 35 % af den komplette brille – og den månedlige leje er altid – uanset hvor mange briller du vælger.<br>Snak med os i butikken omkring Club Brillebaren.';
var text7 = 'Som medlem af Sygeforsikringen Danmark kan du nyde godt af deres tilskudsordning til briller. Dette giver dig mulighed for at få en del af udgifterne dækket.<br><br>Derudover hvis du er folkepensionist eller førtidspensionist efter de gamle regler, kan du også undersøge muligheden for at få tilskud til briller gennem din kommune. Dette kræver dog, at din ansøgning bliver godkendt af kommunen. Når du har modtaget afgørelsen, kan du tage ud og købe dine briller – enten med eller uden tilskud, afhængigt af afgørelsen.';
var text8 = 'Du ansøger nemt og hurtigt via din smartphone – send en sms til 1980 og lån op til 30.000 kr.. Herefter udfylder du ansøgningen og modtager straks svar.<br><br><li>For 6 måneders rentefri delbetaling: <br><li><b>Sms RB IOG6</b> <br><li>For 12 måneders rentefri delbetaling: <br><li><b>Sms RB IOG12</b><br><li>For 24 måneders rentefri delbetaling:<br> <li><b>Sms RB IOG24</b>';
  </script>
  
  <style scoped>
  .containerbox{
    margin-top: 23px;
    height: 484px;
    display: flex;
    margin-left: 33px;
    margin-right: 33px;
    justify-content: center;
  }

  .synlighed{
    visibility: hidden;
  }

.info-row-container {
  display: flex;

}

.info-row1,
.info-row2 {
  display: flex;
  flex-direction: column;

}
.info-row1{
    padding-right: 37px;
}
.info-row2{
    padding-left: 37px;
}
.infobutton {
  margin-bottom: 43px;
}
/*-------------------------------------------------------------------------------------------------------------------------------*/

.dialogbox {
  width: 537px;
  height: 410px;
  background-color: #04192A;
  display: flex;

  color: white;
  font-size: 18px;
}
.info-text{
    margin: 10px;
}
</style>