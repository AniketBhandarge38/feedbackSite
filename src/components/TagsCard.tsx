interface TagsCardProps {
  tags: Array<string>;
}
const TagsCard = ({ tags }: TagsCardProps) => {
  return (
    <div className="tags-card">
      {tags.map((tag: string, index: number) => {
        return <button key={index}>{tag}</button>;
      })}
    </div>
  );
};

export default TagsCard;
