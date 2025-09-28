import Logo from '../Logo'

export default function LogoExample() {
  return (
    <div className="flex items-center gap-4 p-4">
      <Logo size="sm" />
      <Logo size="md" />
      <Logo size="lg" />
    </div>
  )
}