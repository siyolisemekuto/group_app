<template >

    <section id="landing">

        <div class="contain">
        <h1 class="name">Inuit</h1>
        <p class="caption">Expression without inhibition.</p>
        </div>
      
   

    </section>
</template>
<script>
export default {
    
}
</script>
<style >
    #landing{
        background:url('https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-firstarts/usr/images/exhibitions/group_images_override/39/ds2281-1-2.jpg');
        display: flex;
        justify-content: space-around;
        align-items: center;
        /* width: 100vw; */
        height: 100vh;
        padding-top:50px;
        
    }
    .contain{
 
        color: black;
        height: 90%;
        width: 90%;
        -webkit-border-top-left-radius: 200px;
        -webkit-border-bottom-right-radius: 200px;
        -moz-border-radius-topleft: 200px;
        -moz-border-radius-bottomright: 200px;
        border-top-left-radius: 200px;
        border-bottom-right-radius: 200px;
        background: linear-gradient(0.5turn, #dbdb71, #D8A23A);
    }
    .name{
        margin-left: 125px;
        text-align: start;
        font-size: 10rem;
        opacity: 0.7;
        z-index:-20;
    }
    .about{
        width: 50vw;
        font-size: 25px;
    }
    .caption{
        font-size: 400%;
    }
    @media screen and (min-width: 400px) {
        .name{
            font-size: 100px;
            font-weight: 500;
            text-align: center;
        }
        .caption{
            text-align: center;
            font-size: 80px;
            margin-top: 5rem;
        }
    }
</style> 