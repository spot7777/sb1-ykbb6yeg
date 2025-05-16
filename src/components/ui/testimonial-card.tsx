import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "../../lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role: string
  company?: string
  testimonial: string
  rating?: number
  image?: string
}

const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  ({ name, role, company, testimonial, rating = 5, image, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-2xl border-2 border-gold-500/30 bg-black p-8 transition-all duration-500",
          "hover:border-gold-500/50 hover:shadow-xl hover:shadow-gold-500/10",
          "transform hover:-translate-y-1",
          className
        )}
        {...props}
      >
        <div className="absolute right-8 top-8 text-8xl font-serif text-gold-500/10 transition-opacity duration-500 group-hover:text-gold-500/20">
          "
        </div>

        <div className="relative z-10 flex flex-col gap-6 justify-between h-full">
          {rating > 0 && (
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  className={cn(
                    "transition-colors duration-300",
                    index < rating
                      ? "fill-gold-500 text-gold-500 group-hover:fill-gold-300 group-hover:text-gold-300"
                      : "fill-gray-700 text-gray-700"
                  )}
                />
              ))}
            </div>
          )}

          <p className="text-pretty text-lg leading-relaxed text-gray-300 group-hover:text-white transition-colors duration-500">
            {testimonial}
          </p>

          <div className="flex items-center gap-4 justify-start pt-4 border-t border-gold-500/20">
            <div className="flex items-center gap-4">
              {image && (
                <Avatar className="h-14 w-14 border-2 border-gold-500/30 group-hover:border-gold-500/50 transition-colors duration-500">
                  <AvatarImage src={image} alt={name} height={56} width={56} />
                  <AvatarFallback className="text-lg">{name[0]}</AvatarFallback>
                </Avatar>
              )}

              <div className="flex flex-col">
                <h3 className="font-semibold text-lg text-white group-hover:text-gold-500 transition-colors duration-500">
                  {name}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                  {role}
                  {company && ` @ ${company}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
Testimonial.displayName = "Testimonial"

export { Testimonial }