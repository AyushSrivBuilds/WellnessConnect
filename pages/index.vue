<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%2322c55e&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;4&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div class="section-padding py-20 lg:py-32 relative">
        <div class="container-max">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="animate-fade-in">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Find Your Perfect
                <span class="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Wellness Professional
                </span>
              </h1>
              <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with certified yoga instructors, wellness coaches, and nutritionists in your area. 
                Start your journey to better health today.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtLink to="/professionals" class="btn-primary text-center">
                  Find Professionals
                </NuxtLink>
                <NuxtLink to="/how-it-works" class="btn-secondary text-center">
                  How It Works
                </NuxtLink>
              </div>
              
              <!-- Stats -->
              <div class="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary-600 mb-1">500+</div>
                  <div class="text-sm text-gray-600">Professionals</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary-600 mb-1">10k+</div>
                  <div class="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary-600 mb-1">50+</div>
                  <div class="text-sm text-gray-600">Cities</div>
                </div>
              </div>
            </div>
            
            <div class="relative animate-slide-up">
              <div class="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Wellness professional with client"
                  class="rounded-2xl shadow-2xl"
                />
              </div>
              <div class="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full opacity-20 animate-float"></div>
              <div class="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full opacity-20 animate-float" style="animation-delay: -3s;"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section-padding py-20 bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wellness Services for Every Need
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're looking to improve your physical fitness, mental well-being, or nutrition, 
            our certified professionals are here to guide you.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" class="card group hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
              <component :is="service.icon" class="h-8 w-8 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4">{{ service.description }}</p>
            <NuxtLink :to="service.link" class="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
              Learn More
              <ArrowRightIcon class="ml-2 h-4 w-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="section-padding py-20 bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How WellnessConnect Works
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with your wellness journey is simple and straightforward
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(step, index) in steps" :key="step.title" class="text-center">
            <div class="relative mb-8">
              <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span class="text-2xl font-bold text-white">{{ index + 1 }}</span>
              </div>
              <div v-if="index < steps.length - 1" class="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 transform translate-x-10"></div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ step.title }}</h3>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/auth/signup" class="btn-primary">
            Get Started Now
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Featured Professionals -->
    <section class="section-padding py-20 bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Wellness Professionals
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet some of our top-rated professionals who are ready to help you achieve your wellness goals
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="professional in featuredProfessionals" :key="professional.id" class="card group hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-4">
              <img 
                :src="professional.image" 
                :alt="professional.name"
                class="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 class="text-lg font-semibold text-gray-900">{{ professional.name }}</h3>
                <p class="text-primary-600 font-medium">{{ professional.specialty }}</p>
              </div>
            </div>
            <p class="text-gray-600 mb-4">{{ professional.bio }}</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="flex text-yellow-400">
                  <StarIcon v-for="i in 5" :key="i" class="h-4 w-4 fill-current" />
                </div>
                <span class="ml-2 text-sm text-gray-600">{{ professional.rating }} ({{ professional.reviews }} reviews)</span>
              </div>
              <span class="text-lg font-semibold text-gray-900">${{ professional.rate }}/hr</span>
            </div>
            <NuxtLink 
              :to="`/professionals/${professional.id}`" 
              class="mt-4 w-full btn-primary text-center block"
            >
              View Profile
            </NuxtLink>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/professionals" class="btn-secondary">
            View All Professionals
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
      <div class="container-max text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Wellness Journey?
        </h2>
        <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Join thousands of people who have transformed their lives with the help of our certified wellness professionals.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/auth/signup" class="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
            Sign Up Free
          </NuxtLink>
          <NuxtLink to="/professionals" class="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
            Browse Professionals
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  HeartIcon, 
  SparklesIcon, 
  AcademicCapIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/vue/24/outline'

// SEO
useHead({
  title: 'WellnessConnect - Find Your Perfect Wellness Professional',
  meta: [
    { 
      name: 'description', 
      content: 'Connect with certified yoga instructors, wellness coaches, and nutritionists. Start your wellness journey today with trusted professionals in your area.' 
    }
  ]
})

const services = [
  {
    title: 'Yoga Instruction',
    description: 'Find certified yoga instructors for all levels, from beginner to advanced. Improve flexibility, strength, and mindfulness.',
    icon: HeartIcon,
    link: '/professionals?category=yoga'
  },
  {
    title: 'Wellness Coaching',
    description: 'Work with experienced wellness coaches to develop healthy habits and achieve your personal wellness goals.',
    icon: SparklesIcon,
    link: '/professionals?category=wellness'
  },
  {
    title: 'Nutrition Guidance',
    description: 'Get personalized nutrition advice from certified nutritionists to optimize your diet and health.',
    icon: AcademicCapIcon,
    link: '/professionals?category=nutrition'
  }
]

const steps = [
  {
    title: 'Browse Professionals',
    description: 'Search and filter through our verified wellness professionals based on your location and needs.'
  },
  {
    title: 'Book a Session',
    description: 'Schedule a consultation or session directly through our platform with your chosen professional.'
  },
  {
    title: 'Start Your Journey',
    description: 'Begin working with your wellness professional to achieve your health and wellness goals.'
  }
]

const featuredProfessionals = [
  {
    id: 1,
    name: 'Sarah Johnson',
    specialty: 'Yoga Instructor',
    bio: 'Certified Hatha and Vinyasa yoga instructor with 8 years of experience helping clients improve flexibility and mindfulness.',
    image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4.9,
    reviews: 127,
    rate: 75
  },
  {
    id: 2,
    name: 'Michael Chen',
    specialty: 'Wellness Coach',
    bio: 'Holistic wellness coach specializing in stress management and lifestyle optimization for busy professionals.',
    image: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4.8,
    reviews: 89,
    rate: 90
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Nutritionist',
    bio: 'Registered dietitian with expertise in plant-based nutrition and sustainable eating habits for optimal health.',
    image: 'https://images.pexels.com/photos/3823509/pexels-photo-3823509.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5.0,
    reviews: 156,
    rate: 120
  }
]
</script>