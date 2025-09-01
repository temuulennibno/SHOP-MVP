export const Card = (props) => {
  return (
    <a
      href="#"
      class="group block overflow-hidden rounded-2xl border bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
    >
      <img src="https://picsum.photos/seed/card1/800/600" alt="Card 1 image" class="h-48 w-full object-cover transition group-hover:scale-[1.02]" />
      <div class="p-4">
        <h3 class="text-lg font-semibold group-hover:underline text-blue-500">{props.name}</h3>
        <p class="mt-1 text-sm text-gray-600">{props.description}</p>
      </div>
    </a>
  );
};
