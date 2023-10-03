import { Text, View } from 'react-native';

import { styles } from './postCard.styles';
import { PostCardProps } from './postCard.types';

const PostCard: React.FC<PostCardProps> = ({ data }) => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.textHeader}>{data.title}</Text>
        </View>
        <View style={styles.id}>
          <Text style={styles.textHeader}>ID: {data.id}</Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text>{data.body}</Text>
      </View>
    </View>
  );
};

export default PostCard;
