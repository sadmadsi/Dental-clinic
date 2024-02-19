export const Card = (props: any) => {
  const { item } = props;
  return (
    <div className="flex  flex-col px-6 py-3 rounded-xl shadow-card w-[208px]">
      <img src={item.icon} className="m-auto" alt="icon" />
      <p className="text-primary_100 text-center">{item.title}</p>
    </div>
  );
};
