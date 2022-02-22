<script>

export default {
    props: {
        label: {},
        operation: { type: Boolean },
        double: { type: Boolean },
        triple: { type: Boolean },
    }
}
</script>

<template>
    <!-- Nesse caso o nome das classes tem o mesmo nome das propriedades que são usadas como condição.
    Seria a mesma coisa que fazer { double: double, triple: triple, operation: operation }. -->
    <button class="button" :class="{ double, triple, operation }"
        @click="$emit('onClick', label)"
    >
        {{ label }}
    </button>
</template>

<style>
:root {
    --bg-button: #f0f0f0;
    --border-button: 1px solid #888;
}

.button {
    font-size: 1.4rem;
    background-color: var(--bg-button);
    border: none;
    border-right: var(--border-button);
    border-bottom: var(--border-button);
    outline: none;
}

.button:active {
    background-color: #ccc;
}

.button.double {
    grid-column: span 2;
}

.button.triple {
    grid-column: span 3;
}

.button.operation {
    background-color: #fa8231;
    color: #fff;
}

.button.operation:active {
    background-color: #fa8231cc;
}
</style>