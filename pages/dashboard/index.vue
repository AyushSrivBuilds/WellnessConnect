<template>
  <div class="section-padding py-8">
    <div class="container-max">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {{ user.name }}!
        </h1>
        <p class="text-gray-600">
          Here's what's happening with your wellness journey
        </p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div v-for="stat in stats" :key="stat.title" class="card">
          <div class="flex items-center">
            <div class="p-3 rounded-lg" :class="stat.bgColor">
              <component :is="stat.icon" class="h-6 w-6" :class="stat.iconColor" />
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">{{ stat.title }}</p>
              <p class="text-2xl font-bold text-gray-900">{{ stat.value }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Upcoming Appointments -->
        <div class="lg:col-span-2">
          <div class="card">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-semibold text-gray-900">Upcoming Appointments</h2>
              <NuxtLink to="/dashboard/appointments" class="text-primary-600 hover:text-primary-700 font-medium">
                View all
              </NuxtLink>
            </div>
            
            <div class="space-y-4">
              <div v-for="appointment in upcomingAppointments" :key="appointment.id" class="flex items-center p-4 bg-gray-50 rounded-lg">
                <img 
                  :src="appointment.professional.image" 
                  :alt="appointment.professional.name"
                  class="w-12 h-12 rounded-full object-cover"
                />
                <div class="ml-4 flex-1">
                  <h3 class="font-medium text-gray-900">{{ appointment.service }}</h3>
                  <p class="text-sm text-gray-600">with {{ appointment.professional.name }}</p>
                  <div class="flex items-center text-sm text-gray-500 mt-1">
                    <CalendarIcon class="h-4 w-4 mr-1" />
                    {{ formatDate(appointment.date) }}
                    <ClockIcon class="h-4 w-4 ml-3 mr-1" />
                    {{ appointment.time }}
                  </div>
                </div>
                <div class="flex space-x-2">
                  <button class="btn-outline text-sm px-3 py-1">
                    Reschedule
                  </button>
                  <button class="bg-primary-100 text-primary-700 hover:bg-primary-200 px-3 py-1 rounded text-sm font-medium transition-colors">
                    Join
                  </button>
                </div>
              </div>
            </div>

            <div v-if="upcomingAppointments.length === 0" class="text-center py-8">
              <CalendarIcon class="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 class="text-lg font-medium text-gray-900 mb-2">No upcoming appointments</h3>
              <p class="text-gray-600 mb-4">Book a session with one of our wellness professionals</p>
              <NuxtLink to="/professionals" class="btn-primary">
                Find Professionals
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="space-y-6">
          <!-- Quick Actions Card -->
          <div class="card">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div class="space-y-3">
              <NuxtLink to="/professionals" class="flex items-center p-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors group">
                <div class="w-10 h-10 bg-primary-100 group-hover:bg-primary-200 rounded-lg flex items-center justify-center">
                  <UserGroupIcon class="h-5 w-5 text-primary-600" />
                </div>
                <div class="ml-3">
                  <p class="font-medium text-gray-900">Find Professionals</p>
                  <p class="text-sm text-gray-600">Browse wellness experts</p>
                </div>
              </NuxtLink>
              
              <NuxtLink to="/dashboard/appointments/new" class="flex items-center p-3 bg-secondary-50 hover:bg-secondary-100 rounded-lg transition-colors group">
                <div class="w-10 h-10 bg-secondary-100 group-hover:bg-secondary-200 rounded-lg flex items-center justify-center">
                  <CalendarPlusIcon class="h-5 w-5 text-secondary-600" />
                </div>
                <div class="ml-3">
                  <p class="font-medium text-gray-900">Book Appointment</p>
                  <p class="text-sm text-gray-600">Schedule a session</p>
                </div>
              </NuxtLink>
              
              <NuxtLink to="/dashboard/profile" class="flex items-center p-3 bg-accent-50 hover:bg-accent-100 rounded-lg transition-colors group">
                <div class="w-10 h-10 bg-accent-100 group-hover:bg-accent-200 rounded-lg flex items-center justify-center">
                  <CogIcon class="h-5 w-5 text-accent-600" />
                </div>
                <div class="ml-3">
                  <p class="font-medium text-gray-900">Profile Settings</p>
                  <p class="text-sm text-gray-600">Update your info</p>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="card">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div class="space-y-3">
              <div v-for="activity in recentActivity" :key="activity.id" class="flex items-start">
                <div class="w-8 h-8 rounded-full flex items-center justify-center mr-3" :class="activity.bgColor">
                  <component :is="activity.icon" class="h-4 w-4" :class="activity.iconColor" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm text-gray-900">{{ activity.text }}</p>
                  <p class="text-xs text-gray-500">{{ activity.time }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
  CalendarPlusIcon,
  CogIcon,
  HeartIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline'

// SEO
useHead({
  title: 'Dashboard - WellnessConnect',
  meta: [
    { name: 'description', content: 'Your personal wellness dashboard' }
  ]
})

// Mock user data
const user = ref({
  name: 'John Doe',
  email: 'john@example.com',
  memberSince: '2024-01-15'
})

const stats = ref([
  {
    title: 'Total Sessions',
    value: '24',
    icon: HeartIcon,
    bgColor: 'bg-primary-100',
    iconColor: 'text-primary-600'
  },
  {
    title: 'Favorite Professionals',
    value: '3',
    icon: StarIcon,
    bgColor: 'bg-secondary-100',
    iconColor: 'text-secondary-600'
  },
  {
    title: 'Completed Goals',
    value: '8',
    icon: CheckCircleIcon,
    bgColor: 'bg-accent-100',
    iconColor: 'text-accent-600'
  },
  {
    title: 'This Month',
    value: '5',
    icon: CalendarIcon,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  }
])

const upcomingAppointments = ref([
  {
    id: 1,
    service: 'Hatha Yoga Session',
    professional: {
      name: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    date: '2024-01-20T10:00:00Z',
    time: '10:00 AM',
    status: 'confirmed'
  },
  {
    id: 2,
    service: 'Nutrition Consultation',
    professional: {
      name: 'Dr. Emily Rodriguez',
      image: 'https://images.pexels.com/photos/3823509/pexels-photo-3823509.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    date: '2024-01-22T14:00:00Z',
    time: '2:00 PM',
    status: 'confirmed'
  }
])

const recentActivity = ref([
  {
    id: 1,
    text: 'Completed yoga session with Sarah Johnson',
    time: '2 hours ago',
    icon: CheckCircleIcon,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    id: 2,
    text: 'Booked appointment with Dr. Emily Rodriguez',
    time: '1 day ago',
    icon: CalendarPlusIcon,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: 3,
    text: 'Left a 5-star review for Michael Chen',
    time: '3 days ago',
    icon: StarIcon,
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600'
  }
])

// Utility functions
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Check authentication
definePageMeta({
  middleware: 'auth'
})
</script>