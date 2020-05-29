const usersTable = Vue.component("user-table", {
  template: `
  <v-data-table
    :headers="headers"
    :items="users"
    :items-per-page="5"
    class="elevation-1"
  >
  <template v-slot:item.action="{ item }">
                <v-icon medium color="orange" class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
                <v-icon medium color="red" @click="deleteConfirn(item)">mdi-delete</v-icon>
              </template>
  </v-data-table>
`,
  data() {
    return {
      dd: "d332d",
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: true,
          value: "name",
        },
        { text: "LastName", value: "lastName" },
        { text: "email", value: "email" },
        { text: "Actions", value: "action", sortable: false },
      ],
      users: [{ name: "qwd2" }],
    };
  },
  created() {
    this.init();
  },
  methods: {
    editItem(item) {
      this.$router.push("/update/" + item.id);
    },
    async deleteConfirn(item) {
      let sd = await axios.delete("/api/users/" + item.id);
      let ss = await axios.get("/api/users/");
      this.users = ss.data;
    },
    async init() {
      console.log(this.dd);
      let ss = await axios.get("/api/users/");
      console.log(ss.data);
      this.users = ss.data;
    },
  },
});
