import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;

public class imagenbmp {

    public static void main (String[] args){

        String tipoarchivo= Files.probeContentType("C:\\Users\\FernandoMorenoHergue\\Desktop\\2DAM\PSP\\Proyectos\\real.bmp");
        

		
System.out.println(tipoarchivo);
    }
}
