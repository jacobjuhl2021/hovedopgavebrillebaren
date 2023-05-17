<template>
    <RouterLink to="/home"><button>Gå tilbage</button></RouterLink>

    <div class="container">
        <div class="row">
            <div class="col-6">
                <div class="eyesight_box">
                    <img src="../assets/brillebiksen.jpg" alt="brillebaren">
                </div>
            </div>
        
            <div class="col-6">
                <div class="eyesight_box-btn">
                    <p class="btn_option">Vælg synsstyrke</p>
                    <task_button class="eyesight-btn" task_buttontext = "Normalt syn 1.0"/>
                    <task_button class="eyesight-btn" task_buttontext = "80% syn 0,8"/>
                    <task_button class="eyesight-btn" task_buttontext = "70% syn 0,7"/>
                    <task_button class="eyesight-btn" task_buttontext = "Kørekortgrænse 0,5"/>
                    <task_button class="eyesight-btn" task_buttontext = "Svagsynsgrænse 0,3"/>
                    <task_button class="eyesight-btn" task_buttontext = "Social blindhed 0,1"/>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quasi? Quidem dicta excepturi magnam rerum accusantium recusandae harum nobis est exercitationem molestias totam, necessitatibus autem tempore nihil eveniet incidunt quisquam.
            </div>
        </div>
    </div>

</template>

<script>
import task_button from '../components/task_button.vue'

export default {
    data() {
    return {
    };
  },
  components: {
    task_button
  }
}
</script>

<style>
body{
    background-color: #f5ede1;
}

.eyesight_box{
    left: 76px;
    top: 124px;
    background-color: black;
}

.eyesight_box-btn{
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-left: 40px;

}

.btn_option {
    text-align: center;
    font-size: 30px;
    margin-right: -13px;
}

.eyesight-btn{
    margin: 10px;
    display: flex;
    flex-direction: column;
    font-size: 16px;
}

</style>
