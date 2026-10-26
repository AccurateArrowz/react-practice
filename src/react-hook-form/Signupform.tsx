import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

const signupSchema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.email(),
    phoneNo: z.string().min(10, 'Enter a valid phone number'),
    role: z.enum(['owner', 'customer']),
    password: z.string().min(8, 'At least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type SignupState = z.infer<typeof signupSchema>

export default function SignupForm2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupState>({
    resolver: zodResolver(signupSchema),
    mode: 'onTouched',
    
  })

  const onSubmit = (data: SignupState) => {
    console.log(data)
  }
  const roleOptions = [{value: 'owner', label: 'I am a owner'}, 
    {value: 'customer', label: 'I am a travller'},
  ] satisfies {value: SignupState['role'], label: string}[]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" {...register('firstName')} />
        <span role="alert" className="min-h-5 block text-sm text-red-500">
          {errors.firstName?.message}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" type="text" {...register('lastName')} />
        <span role="alert" className="min-h-5 block text-sm text-red-500">
          {errors.lastName?.message}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register('email')} />
        <span role="alert" className="min-h-5 block text-sm text-red-500">
          {errors.email?.message}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phoneNo">Phone Number</label>
        <input id="phoneNo" type="tel" {...register('phoneNo')} />
        <span role="alert" className="min-h-5 block text-sm text-red-500">
          {errors.phoneNo?.message}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="role">I am a...</label>
        <select id="role" {...register('role')}>
          <option value="custmer">I am a traveler</option>
          <option value="owner">I want to list my property</option>
        </select>
        <span role="alert" className="min-h-5 block text-sm text-red-500">
          {errors.role?.message}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...register('password')} />
        <span role="alert" className="min-h-5 block text-sm text-red-500">
          {errors.password?.message}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" type="password" {...register('confirmPassword')} />
        <span role="alert" className="min-h-5 block text-sm text-red-500">
          {errors.confirmPassword?.message}
        </span>
      </div>

      <button type="submit">Sign Up</button>
    </form>
  )
}