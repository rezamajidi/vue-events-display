<template>
  <div class="py-16 px-4 sm:px-0">
    <div class="container mx-auto">
      <section>
        <router-link to="/" class="inline-flex items-center text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="transform rotate-180 w-4 h-4 mr-1 block" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
          <span>Back</span>
        </router-link>
      </section>
      <h1 class="text-purple-500 font-bold text-5xl mt-10">{{ pageTitle }}</h1>
      
      <div v-if="eventDetail" class="mt-6 rounded-lg bg-gray-50 px-8 shadow-md">
        <EventRangeDate :startDate="eventDetail.startsAt" :endDate="eventDetail.endsAt" />
      </div>

      <div v-if="eventEmployees.length > 0" class="mt-6">
        <p class="text-purple-500 font-bold text-2xl mt-10">Employees</p>
        <ul class="flex flex-wrap mt-3 -mx-2">
          <li
            v-for="employee in eventEmployees"
            :key="employee.id"
            class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
          >
            <EmployeeCard v-bind="employeeCardAdaptor(employee)"  />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EventRangeDate from '@/components/events/EventRangeDate.vue'
import EmployeeCard from '@/components/shared/EmployeeCard.vue'
export default {
  name: 'Event',
  components: {
    EventRangeDate,
    EmployeeCard
  },
  mounted() {
    this.fetchEventById(this.$route.params.id)
  },
  computed: {
    ...mapGetters('event', ['eventDetail', 'eventEmployees']),
    pageTitle(){
      return this.eventDetail?.position?.name
    }
  },
  methods: {
    ...mapActions('event', ['fetchEventById']),
    employeeCardAdaptor(emp) {
      return {
        name: `${emp.firstName} ${emp.lastName}`,
        image: emp.image
      }
    }
  }
}
</script>
