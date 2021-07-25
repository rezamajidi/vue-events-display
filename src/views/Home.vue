<template>
  <div class="py-16 px-4 sm:px-0">
    <div class="container mx-auto">
      <h1 class="font-bold text-3xl text-gray-700 mb-8">Events</h1>
      <div>
        <span>Filter Date:</span>
        <div class="flex justify-center">
          <date-range-picker
            ref="picker"
            :opens="'center'"
            :locale-data="{ firstDay: 1, format: 'dd-mm-yyyy HH:mm:ss' }"
            :timePicker="true"
            :showDropdowns="true"
            :autoApply="true"
            v-model="dateRange"
          >
              <template v-slot:input="picker" class="w-32">
                  {{ picker.startDate }} - {{ picker.endDate }}
              </template>
          </date-range-picker>
        </div>
      </div>
      <section v-if="!isEventsLoading" class="flex flex-wrap -mx-4">
        <div v-for="event in events" :key="event.id" class="w-full sm:1/2 md:w-1/3 lg:w-1/4 p-4">
          <EventCard v-bind="eventCardAdaptor(event)"/>
        </div>
      </section>
      <section v-else class="py-20">
        <loading />
      </section>
      <Btn
        v-if="!isFilterEnabled && !isEventsLoading && totalEvents > events.length"
        :title="'Show more'"
        :isLoading="isMoreEventsLoading"
        @onClick="fetchMoreEvents"
      />
      <p class="text-center text-sm text-gray-400 mt-2">Showing {{ events.length }} of {{ totalEvents }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EventCard from '@/components/events/EventCard.vue';
import Loading from '@/components/shared/Loading.vue'
import Btn from '@/components/shared/Btn.vue'
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

export default {
  name: 'Home',
  components: { EventCard, Loading, Btn, DateRangePicker },
  data(){
    return {
      dateRange: {
        startDate: null,
        endDate: null
      }
    }
  },
  computed: {
    ...mapGetters('event',['events','totalEvents','isEventsLoading','isMoreEventsLoading']),
    isFilterEnabled(){
      return this.dateRange.startDate || this.dateRange.endDate
    }
  },
  mounted(){
    this.fetchEvents()
  },
  methods: {
    ...mapActions('event',['fetchEvents', 'fetchMoreEvents']),
    eventCardAdaptor(event){
      return {
        id: event.id,
        title: event.position?.name ?? '',
        color: event.position?.color ?? '',
        startString: event.startsAt ?? '',
        endString: event.endsAt ?? ''
      }
    },
  },
  watch: {
    dateRange: {
      deep: true,
      handler() {
        this.fetchEvents({
          startsAt: this.dateRange.startDate,
          endsAt: this.dateRange.endDate,
          offset: 0,
          limit: 9999
        })
      },
    }
  }
}
</script>
