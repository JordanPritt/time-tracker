<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <h3>
            <b>Add Time</b>
          </h3>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          <form>
            <ul class="wrapper">
              <li class="form-row">
                <label for="name">Title:</label>
                <input type="text" id="name" />
              </li>
              <li class="form-row">
                <label for="townborn">Date:</label>
                <input type="date" id="townborn" />
              </li>
              <li class="form-row">
                <label for="email">Start Time:</label>
                <input type="email" id="email" />
              </li>
            </ul>
          </form>
        </slot>
      </section>
      <footer class="modal-footer">
        <slot name="footer">
          <button type="button" class="btn-green" @click="close" title="Submit Entry">&#10003;</button>
          <button type="button" class="btn-close" @click="close" title="Cancel Entry">&#120;</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',

  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #093b5d;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 0.5em;
}

.modal-header,
.modal-footer {
  padding: 0em;
  display: flex;
  background-color: #093b5d;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #a3d060;
  justify-content: space-between;
  padding-left: 1em;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
  padding: 0.5em 0 0.5em 0;
}

.modal-body {
  position: relative;
  padding: 1em;
  justify-content: space-between;
  flex-direction: row;
  flex-flow: row;
  background-color: #ddd;
}

.btn-close {
  color: white;
  background: #b22222;
  border: 1px solid #b22222;
  border-radius: 2px;
  margin: 0em 1em;
  font-size: 1.25em;
  font-weight: bold;
  cursor: pointer;
}

.btn-green {
  color: white;
  background: #a3d060;
  border: 1px solid #a3d060;
  border-radius: 2px;
  margin: 0em 1em;
  font-size: 1.25em;
  font-weight: bold;
  cursor: pointer;
}

.add-input {
  margin: 0.25em;
  padding: 0.25em;
  border-radius: 0.25em;
}

.wrapper {
  list-style-type: none;
  color: #333;
  padding: 0;
  margin: 0;
}
.form-row {
  display: flex;
  justify-content: flex-end;
  padding: 0.5em;
  min-width: 25em;
}
.form-row > label {
  padding: 0.5em 1em 0.5em 0;
  flex: 1;
}
.form-row > input {
  flex: 2;
}
.form-row > input,
.form-row > button {
  padding: 0.5em;
}
.form-row > button {
  background: gray;
  color: white;
  border: 0;
}
.form-row label {
  font-weight: bold;
}
</style>
