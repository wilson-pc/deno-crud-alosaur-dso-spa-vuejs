const userForm = Vue.component("user-form", {
  template: `
  <div>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="50"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    
   
    <v-text-field
      v-model="lastName"
      :rules="lastNameRules"
      label="Last Name"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="save"
    >
      Save
    </v-btn>


  </v-form>
</div>
`,
  data() {
    return {
      valid: false,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 50) || "Name must be less than 50 characters",
      ],
      lastName: "",
      lastNameRules: [
        (v) => !!v || "Last Name is required",
        (v) =>
          (v && v.length <= 100) || "Name must be less than 100 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    save() {
      //console.log(this.name);
      axios({
        method: "post",
        url: "/api/users/",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          name: this.name,
          lastName: this.lastName,
          email: this.email,
        },
      }).then(function (response) {
        console.log(response);
        this.name = "";
        this.lastName = "";
        this.email = "";
        alert("registron con exito");
      })
        .catch(function (error) {
          alert("Ocurrio un error");
        });
    },
  },
});
