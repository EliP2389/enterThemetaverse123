import { useMoralis } from 'react-moralis'

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis()

  const setUserName = () => {
    const username = prompt(
      `Enter your new username (current username: ${user.getUsername()})`
    )

    // if no username stop function
    if (!username) return

    // changes data in moralis
    setUserData({
      username: username,
    })
  }

  return (
    <div className="absolute top-5 right-5 text-sm">
      <button
        onClick={setUserName}
        disabled={isUserUpdating}
        className="hover:text-rose-700"
      >
        Change Username
      </button>
    </div>
  )
}

export default ChangeUsername
