import ContentfulImage from './contentful-image'

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        <ContentfulImage
          src={picture.url}
          fill
          className="rounded-full"
          alt={name}
          sizes="(max-width: 48px) 100vw"
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
