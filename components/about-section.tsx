"use client"

import { Heart, Target, ArrowRight, Users, Award, Sparkles, CheckCircle, Star } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-emerald-50/30 to-white">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            About Our Wellness Journey
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforming Lives Through
            <span className="text-emerald-600 block">Mindful Wellness</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We're dedicated to helping you unlock the transformative power of yoga, meditation, and mindful living
            practices that nurture your complete well-being.
          </p>
        </div>

        <div className="mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/03.jpg"
              alt="Serene yoga studio with natural lighting and peaceful atmosphere"
              width={1200}
              height={600}
              className="w-full h-[400px] sm:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Your Sanctuary Awaits</h3>
              <p className="text-lg opacity-90">Experience tranquility in our beautiful wellness space</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              To create a welcoming sanctuary where everyone can explore the profound benefits of yoga and wellness
              practices, regardless of their experience level or background.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We believe that wellness is a journey of self-discovery, and we're here to guide you with compassion,
              expertise, and unwavering support.
            </p>
            <div className="flex items-center mt-6 text-emerald-600">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="font-semibold">Inclusive & Welcoming</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Philosophy</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              Our experienced instructors blend ancient yoga wisdom with modern wellness science to create
              transformative experiences that honor your unique path.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              From gentle restorative practices to dynamic flow sequences, we offer comprehensive services designed to
              nurture your mind, body, and spirit.
            </p>
            <div className="flex items-center mt-6 text-rose-600">
              <Star className="w-5 h-5 mr-2" />
              <span className="font-semibold">Expert Guidance</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-12 mb-20 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Our Impact in Numbers</h3>
            <p className="text-emerald-100 text-lg">Celebrating the wellness journey we've shared together</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-emerald-100 font-medium text-lg">Transformed Lives</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">5+</div>
              <div className="text-emerald-100 font-medium text-lg">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-emerald-100 font-medium text-lg">Mindful Sessions</div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  )
}
