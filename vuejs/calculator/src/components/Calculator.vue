<script>
import Button from "./Button.vue";
import Display from "./Display.vue";

export default {
    components: { Button, Display },
    data: function () {
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0,
        }
    },
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data());
        },
        setOperation(operation) {
            if (this.current === 0) {
                this.operation = operation;
                this.current = 1;
                this.clearDisplay = true;
            } else {
                const equals = operation === "=";
                const currentOperation = this.operation;

                try {
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    );

                    if (isNaN(this.values[0]) || !isFinite(this.values[0])) {
                        this.clearMemory();
                    }
                } catch (error) {
                }

                this.values[1] = 0;

                this.displayValue = this.values[0];
                this.operation = equals ? null : operation;
                this.current = equals ? 0 : 1;
                this.clearDisplay = !equals;
            }
        },
        setDigit(digit) {
            if (digit === "." && this.displayValue.includes(".")) {
                return;
            }

            const clearDisplay = this.displayValue === "0" || this.clearDisplay;
            const currentValue = clearDisplay ? "" : this.displayValue;
            const displayValue = currentValue + digit;

            this.displayValue = displayValue;
            this.clearDisplay = false;

            if (digit !== ".") {
                const i = this.current;
                const newValue = parseFloat(this.displayValue);
                this.values[i] = newValue;
            }
        },
    },
}
</script>

<template>
    <div class="calculator">
        <Display :value="displayValue.toString()" />
        <Button label="AC" triple @onClick="clearMemory" />
        <Button label="/" operation @onClick="setOperation" />
        <Button label="7" @onClick="setDigit" />
        <Button label="8" @onClick="setDigit" />
        <Button label="9" @onClick="setDigit" />
        <Button label="*" operation @onClick="setOperation" />
        <Button label="4" @onClick="setDigit" />
        <Button label="5" @onClick="setDigit" />
        <Button label="6" @onClick="setDigit" />
        <Button label="-" operation @onClick="setOperation" />
        <Button label="1" @onClick="setDigit" />
        <Button label="2" @onClick="setDigit" />
        <Button label="3" @onClick="setDigit" />
        <Button label="+" operation @onClick="setOperation" />
        <Button label="0" double @onClick="setDigit" />
        <Button label="." @onClick="setDigit" />
        <Button label="=" operation @onClick="setOperation" />
    </div>
</template>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>