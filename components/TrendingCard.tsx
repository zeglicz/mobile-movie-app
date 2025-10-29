import { images } from '@/constants/images';
import { TrendingCardProps } from '@/interfaces/interfaces';
import MaskedView from '@react-native-masked-view/masked-view';
import { Link } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

function TrendingCard({
  movie: { movie_id, title, poster_url, release_date, vote_average },
  index,
}: TrendingCardProps) {
  return (
    <Link href={`/movies/${movie_id}`} asChild>
      <TouchableOpacity className="w-32 relative ml-4">
        <Image
          source={{ uri: poster_url }}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />
        <View className="absolute bottom-9 -left-5  pb-3 rounded-full">
          <MaskedView
            maskElement={
              <Text className="font-bold text-white text-6xl">{index + 1}</Text>
            }
          >
            <Image
              source={images.rankingGradient}
              className="size-14"
              resizeMode="cover"
            />
          </MaskedView>
        </View>
        <Text
          className="text-sm font-bold mt-3 text-light-300 text-center"
          numberOfLines={1}
        >
          {title}
        </Text>
        <Text className="text-xs mt-2 text-light-100 text-center">
          ★ {vote_average.toFixed(2)} &middot;{' '}
          <Text className="text-light-200">
            {release_date?.slice(0, 7) ?? ''}
          </Text>
        </Text>
      </TouchableOpacity>
    </Link>
  );
}

export default TrendingCard;
