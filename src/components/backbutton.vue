<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col go-back">
                <div class="go-back_pic">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20C4.47581 20 0 15.5242 0 10C0 4.47581 4.47581 0 10 0C15.5242 0 20 4.47581 20 10C20 15.5242 15.5242 20 10 20ZM11.1653 14.2097L8.12097 11.2903H15.4839C16.0202 11.2903 16.4516 10.8589 16.4516 10.3226V9.67742C16.4516 9.14113 16.0202 8.70968 15.4839 8.70968H8.12097L11.1653 5.79032C11.5565 5.41532 11.5645 4.79032 11.1815 4.40726L10.7379 3.96774C10.3589 3.58871 9.74597 3.58871 9.37097 3.96774L4.02016 9.31452C3.64113 9.69355 3.64113 10.3065 4.02016 10.6815L9.37097 16.0323C9.75 16.4113 10.3629 16.4113 10.7379 16.0323L11.1815 15.5927C11.5645 15.2097 11.5565 14.5847 11.1653 14.2097Z" fill="#A38232"/>
                    </svg>
                </div>
                <div class="nav_back">
                    <RouterLink to="/"><button class="go-back_btn">Gå tilbage</button></RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.go-back{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    flex-direction: row;
    background-color: #E7EBE9;
    opacity: 90%;
}

.nav_back{
    display: flex;
    align-items: center;
    height: 74px;
    width: auto;
}

.go-back_pic{
    display: flex;
    align-items: center;
    margin-left: 30px;
}

.go-back_btn{
    color: #A38232;
    border-style: none;
    background: none;
}

</style>