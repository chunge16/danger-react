export default function classes(...classesList: Array<string | undefined>){
  return classesList.filter(Boolean).join(' ');
}
