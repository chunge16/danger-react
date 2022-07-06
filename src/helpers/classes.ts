export default function classes(...classesList: Array<string | undefined>){
  const st = ' ';
  return classesList.filter(Boolean).join(st);

}
