
export class TeamLogo {

    public path: string;
    public static readonly defaultDir: string = "/assets/brazil/";
    public static readonly defaultExt: string = ".png";
  
    constructor(public file: string,
      public dir: string = TeamLogo.defaultDir,
      public ext: string = TeamLogo.defaultExt)
    {
  
      if (ext.charAt(0) !== '.')
        ext = '.'.concat(ext);
      this.path = dir + file + ext;
  
    }
  
    public static validFileName(name: string): string {
  
      let special = [
        'à', 'á', 'ã', 'â', 'ä',
        'ò', 'ó', 'õ', 'ô', 'ö',
        'è', 'é', 'ê', 'ë',
        'ì', 'í', 'î', 'ï',
        'ù', 'ú', 'û', 'ü',
        'ç', 'ñ', ' '
      ];
  
      let valid = [
        'a', 'a', 'a', 'a', 'a',
        'o', 'o', 'o', 'o', 'o',
        'e', 'e', 'e', 'e',
        'i', 'i', 'i', 'i',
        'u', 'u', 'u', 'u',
        'c', 'n', '_'
      ];
  
      let lowerName = name.toLowerCase();
      let finalName = "";
      
      for (let i=0; i<lowerName.length; i++) {
        let j;
        for (j=0; j<special.length; j++) {
          if (lowerName.charAt(i) == special[j]) {
            finalName += valid[j];
            break;
          }
        }
        if (j == special.length)
          finalName += lowerName.charAt(i);
      }
  
      return finalName;
    }
  }