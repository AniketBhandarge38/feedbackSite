interface TagsCardProps {
  tags: Array<string>;
}
const TagsCard = ({ tags }: TagsCardProps) => {
  return (
    <div className="tags-card">
      {tags.map((tag: string) => {
        return <button>{tag}</button>;
      })}
    </div>
  );
};

export default TagsCard;
