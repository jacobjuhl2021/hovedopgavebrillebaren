<template>
    <backbutton/>
    <div class="container">
        <div class="row underhold-content">
            <div class="col-6">
                <div class="eyesight_box">
                    <img v-bind:src="currentImage" alt="brillebaren">
                </div>
            </div>
        
            <div class="col-6">
                <div class="eyesight_box-btn">
                    <p class="btn_option">Vælg synsstyrke</p>
                    <task_button class="eyesight-btn" @click="showText(1)" task_buttontext = "Normalt syn 1.0"/>
                    <task_button class="eyesight-btn" @click="showText(2)" task_buttontext = "80% syn 0,8"/>
                    <task_button class="eyesight-btn" @click="showText(3)" task_buttontext = "70% syn 0,7"/>
                    <task_button class="eyesight-btn" @click="showText(4)" task_buttontext = "Kørekortgrænse 0,5"/>
                    <task_button class="eyesight-btn" @click="showText(5)" task_buttontext = "Svagsynsgrænse 0,3"/>
                    <task_button class="eyesight-btn" @click="showText(6)" task_buttontext = "Social blindhed 0,1"/>
                </div>
            </div>
            <div class="col-6 Entertainment-text">
                {{ currentText }}
            </div>
        </div>
    </div>

</template>

<script>
import task_button from '../components/task_button.vue'
import backbutton from '../components/backbutton.vue'
import pic from '../assets/pic_one_sight.jpg'
import pictwo from '../assets/pic_two_sight.jpg'
import picthree from '../assets/pic_three_sight.jpg'
import picfour from '../assets/pic_four_sight.jpg'
import picfive from '../assets/pic_five_sight.jpg'
import picsix from '../assets/pic_six_sight.jpg'

export default {
    data() {
    return {
        currentText: '',
        currentImage: pic
    };
  },
  components: {
    task_button,
    backbutton
  },
  methods: {
        showText(textNumber) {
        // Update the currentText based on the button clicked
            if (textNumber === 1) {
                this.currentText = 'Sådan ser en person med normal synsstyrke eller 20/20 synsstyrke (tilsvarende decimal 1,0) kan generelt se skarpt og tydeligt på forskellige afstande og skelne detaljer uden problemer. De vil opleve et klart og nøjagtigt syn, både på kort og lang afstand, og vil ikke have behov for briller eller kontaktlinser for at korrigere deres syn.';
                this.currentImage = pic;
            } else if (textNumber === 2) {
                this.currentText = 'Du har 80% syn makker! Du kan generelt ikke se fjernsyn uden briller! En brillestyrke på omkring 1+ vil nok være ideelt for en person med 80% syn, men.';
                this.currentImage = pictwo;
            } else if (textNumber === 3) {
                this.currentText = 'Du har 70% syn makker! Du kan generelt ikke se fjernsyn uden briller! En brillestyrke på omkring 1+ vil nok være ideelt for en person med 70% syn.';
                this.currentImage = picthree;
            } else if (textNumber === 4) {
                this.currentText = 'Du har sikkert haft problemer med at se trafikken. Du må ikke køre bil uden briller ! En brillestyrke på omkring 2+ vil nok være ideelt for en person med 50% syn.';
                this.currentImage = picfour;
            } else if (textNumber === 5) {
                this.currentText = 'Du har virkelig brug for briller for at kunne se noget som helst. En brillestyrke på omkring 3+ vil nok være ideelt for en person med 30% syn.';
                this.currentImage = picfive;
            } else if (textNumber === 6) {
                this.currentText = 'Du kan sandsynligvis kun se skikkelser, intet vil være klart for dig! Et forstørrelsesglas på omkring 10+ vil nok være ideelt for en person med 10% syn.';
                this.currentImage = picsix;
            }
        }
    }
}

</script>

<style>
body {
    background-color: #f5ede1;
    overflow-y: hidden;
    background: url(../assets/baggrund.jpg) no-repeat center center fixed;
    background-size: cover;
}

.underhold-content{
    margin-top: 104px;
}

.Entertainment-text {
    position: relative;
    margin-top: -110px;
}

.eyesight_box {
    left: 76px;
    top: 124px;
    height: 250px;
    background-color: lightblue;
}

.eyesight_box-btn {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-left: 40px;

}

.btn_option {
    text-align: center;
    font-size: 30px;
}

.eyesight-btn {
    align-items: center;
    justify-content: center;
    margin: 2%;
    display: flex;
    flex-direction: column;
    font-size: 16px;
}

</style>
