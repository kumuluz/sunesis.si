// Renders one or more schema.org objects as JSON-LD script tags. Server
// component — the JSON is serialized into the static HTML at build time.
export function JsonLd({ data }: { data: object | readonly object[] }) {
  const items = Array.isArray(data) ? data : [data]

  return (
    <>
      {items.map((item, index) => (
        <script
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  )
}
