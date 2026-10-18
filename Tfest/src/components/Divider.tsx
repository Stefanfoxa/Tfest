export default function Divider() {
  return (
    <div role="separator" className="bg-forest px-4 py-6">
      <div className="mx-auto flex max-w-5xl items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-gold" />
        <span className="h-3 w-3 rotate-45 bg-gold" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold to-gold" />
      </div>
    </div>
  )
}
