import { icons } from '@/constants/icons';
import { fetchMovieDetails } from '@/services/api';
import useFetch from '@/services/useFetch';
import { router, useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface MovieInfoProps {
  label: string;
  value?: string | number | null;
}

function MovieInfo({ label, value }: MovieInfoProps) {
  return (
    <View className="flex-col items-start justify-center mt-7">
      <Text className="text-light-100 font-normal text-lg mb-3">{label}</Text>
      <Text className="text-white text-xl">{value || 'N/A'}</Text>
    </View>
  );
}

function MoveDetails() {
  const { id } = useLocalSearchParams();

  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string),
  );

  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            source={{
              uri: `https:image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />
        </View>

        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-white font-bold text-xl">{movie?.title}</Text>

          {/* Release date and minutes */}
          <View className="flex-row items-center gap-x-1 mt-2">
            <Text className="text-light-200">
              {movie?.release_date.slice(0, 4)} &middot;{' '}
              {`${Math.round(movie?.runtime / 60)}h ${movie?.runtime % 60}m`}
            </Text>
          </View>

          {/* Rating and votes */}
          <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-3">
            <Image source={icons.star} className="size-4" />
            <Text className="text-white font-bold text-lg">
              {Math.round(movie?.vote_average) ?? 0}/10
            </Text>
            <Text className="text-light-200 text-base">
              ({movie?.vote_count} votes)
            </Text>
          </View>

          <MovieInfo label="Overview" value={movie?.overview} />
          <MovieInfo
            label="Genres"
            value={movie?.genres?.map((g) => g.name).join(' • ') || 'N/A'}
          />
          <View className="flex flex-row justify-between w-4/5">
            <MovieInfo
              label="Budget"
              value={`$${movie?.budget / 1_000_000} milions`}
            />
            <MovieInfo
              label="Revenue"
              value={`$${Math.round(movie?.revenue / 1_000_000)} milions`}
            />
          </View>

          <MovieInfo
            label="Production Companies"
            value={
              movie?.production_companies.map((c) => c.name).join(' • ') ||
              'N/A'
            }
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        className="absolute bottom-8 left-0 right-0 mx-5 bg-accent rounded-full py-3.5 flex flex-row items-center justify-center z-50"
        onPress={router.back}
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-0.5 rotate-180"
          tintColor="#fff"
        />
        <Text className="text-white font-semibold text-base">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MoveDetails;
