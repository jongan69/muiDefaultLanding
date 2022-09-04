import { withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'

export default function Settings({ user }) {
  return (
    <>
      <p>Hello {user.email}</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}

export const getServerSideProps = withPageAuth()