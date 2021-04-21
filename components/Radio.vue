<!-- "template" correspond au body -->
<template>
    <div class="radio--input">
        <input type="radio"
               :disabled="state"
               :name="radioName"
               :checked="checked"
               :value="value"
               @change="updateInput"
               :class=" { error: error }"
               :id="inputId"

        />
        <label class="card--name" :for="inputId">
            {{ label }}
        </label>
    </div>
</template>

<!-- Script vue.js -->
<script>
export default {
    model: {
        prop: 'modelValue',
        event: 'change'
    },
    props: {
        radioName: '',
        state: '',
        checked: '',
        value: {
            type: String,
        },
        error: String,
       inputId: '',
        label: {
            type: String,
            required: true
        },
    },
    computed: {
        shouldBeChecked() {
            return this.modelValue === this.value
        }
    },
    methods: {
        updateInput() {
            this.$emit('change', this.value)
        },
        emitToCard()
        {
            this.$emit('listenRadio', true)
        }
    }
}
</script>

<!-- Style CSS / SASS -->
<style lang="scss" scoped>
@import './assets/scss/tools/variables';

.radio--input {
    display: grid;
    grid-template-columns: 21px 1fr;
    grid-column-gap: 4px;
    cursor: pointer;
    &:hover {
        border-color: var(--textGray);
    }
}

.card--name {
    font-weight: 400;
}

@supports(-webkit-appearance: none) or (-moz-appearance: none) {
    input[type='radio'] {
        --active: white;
        --active-inner: white;
        --input-border: var(--border);
        --background: var(--background);
        --disabled: var(--grayDisable);
        --disabled-inner: var(--bg-page);
        --shadow-inner: rgba(18, 22, 33, .1);
        height: 21px;
        outline: none;
        position: relative;
        -webkit-appearance: none;
        -moz-appearance: none;
        margin: 0;
        padding: 0;
        box-shadow: none;
        cursor: pointer;
        height: 21px;
        border: 1px solid var(--input-border);
        background: var(--background);
        transition: background .3s ease, border-color .3s ease;
        &:after {
            content: '';
            display: block;
            left: 0;
            top: 0;
            position: absolute;
            transition: transform .3s ease, opacity .2s ease, filter .3s ease;
        }
        &:checked {
            background: var(--background);
            border-color: var(--textGray);
            &:after {
                filter: drop-shadow(0 1px 2px var(--shadow-inner));
                transition: opacity .3s ease, filter .3s ease, transform .6s cubic-bezier(.175, .88, .32, 1.2);
            }
            .radio--card {
                border-color: red;
            }
        }
        &:disabled {
            cursor: not-allowed;
            opacity: .9;
            background: var(--background);
            &:checked {
                background: var(--background);
                border-color: var(--textGray);
            }
        }
        &:hover {
            &:not(:checked) {
                &:not(:disabled) {
                    border-color: var(--textGray);
                }
            }
        }

        &:not(.switch) {
            width: 21px;
            &:after {
                opacity: 0;
            }
            &:checked {
                &:after {
                    opacity: 1;
                }
            }
        }
    }

    input[type='checkbox'] {
        &:not(.switch) {
            border-radius: 6px;
            &:after {
                width: 5px;
                height: 9px;
                border: 2px solid;
                border-top: 0;
                border-left: 0;
                left: 7px;
                top: 4px;
                transform: rotate(20deg);
            }
            &:checked {
                &:after {
                    transform: rotate(43deg);
                }
            }
        }

        &.switch {
            width: 38px;
            border-radius: 11px;
            &:after {
                left: 2px;
                top: 2px;
                border-radius: 50%;
                width: 15px;
                height: 15px;
                background: var(--background);
            }
            &:checked {
                &:after {
                    background: var(--background);
                    transform: translateX(17px);
                }
            }
            &:disabled {
                &:not(:checked) {
                    &:after {
                        opacity: .6;
                    }
                }
            }
        }
    }

    input[type='radio'] {
        border-radius: 50%;

        &:after {
            width: 19px;
            height: 19px;
            border-radius: 50%;
            background: var(--background);
            opacity: 0;
            transform: scale(.7);
        }

        &:checked {
            &:after {
                background: white;
                transform: scale(.5);
            }
        }
    }
}
</style>
