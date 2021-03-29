<template>
  <v-container>
    <v-card v-if="$store.state.promo">
      <v-list two-line>
        <v-list-item-group>
          <template v-for="(item, index) in $store.state.promo">
            <v-list-item :key="item.id">
              <template>
                <v-list-item-content class='text-left'>
                  <v-list-item-title v-text="item.title"></v-list-item-title>

                  <v-list-item-subtitle
                    class="text--primary"
                    v-text="new Date(item.valid_time).toLocaleDateString('fr').replace(/\//g, '-')"
                  ></v-list-item-subtitle>

                  <v-list-item-subtitle v-text="item.description"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text v-text="`${item.discount}%`"></v-list-item-action-text>

                  <span
                    color="grey lighten-1"
                  >
                    {{ item.emoji }}
                  </span>
                </v-list-item-action>
              </template>
            </v-list-item>

            <v-divider
              v-if="index < $store.state.promo.length - 1"
              :key="index"
            ></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Promotions",

  data: () => ({}),

  beforeMount() {
    this.$store.dispatch('getPromos')
  },

  methods: {
    disconnect() {
      this.router.push('/auth/login');
      localStorage.clear();
    }
  }
}
</script>

<style scoped>
.h1Emoji {
  text-align: justify;
  margin-top: 0;
  font-size: 27px;
}
</style>
