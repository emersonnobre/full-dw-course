<template>
    <div class="door-area" >
        <div class="door-frame">
            <Gift v-if="hasGift && opened" />
        </div>
        <div class="door" :class="{selected: selected && !opened, opened}" @click="selected = !selected">
            <div class="number">{{number}}</div>
            <div class="macaneta" @click="opened = !opened"></div>
        </div>
    </div>
</template>

<script>
import Gift from './Gift.vue';

export default {
    name: 'Door',
    components: { Gift, },
    data() {
        return {
            selected: false,
            opened: false,
        }
    },
    props: {
        number: { type: Number },
        hasGift: { type: Boolean },
    },
    methods: {
        eventHandler() {
            console.log('oou')
            console.log(this.selected, this.opened)
        }
    }
}
</script>

<style scoped>
.door-area {
    position: relative;
    width: 200px;
    height: 310px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.door {
    position: absolute;
    width: 150px;
    height: 200px;
    background-color: rgb(235, 224, 69);
    border: rgb(250, 154, 45) solid 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    font-size: 1.4rem;
}

.selected {
    border: yellow solid 5px;
}

.door-frame {
    position: absolute;
    width: 150px;
    height: 200px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.macaneta {
    position: absolute;
    background-color: red;
    width: 11px;
    height: 10px;
    border-radius: 100%;
}

.number {
    position: absolute;
    color: rgb(250, 154, 45);
    align-self: center;
    top: 30px;
}

.opened {
    background-color: #0007;
}

.opened .macaneta {
    display: none;
} 

.opened .number {
    display: none;
} 
</style>
