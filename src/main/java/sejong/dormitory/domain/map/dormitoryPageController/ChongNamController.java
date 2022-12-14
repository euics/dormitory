package sejong.dormitory.domain.map.dormitoryPageController;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import sejong.dormitory.domain.map.dormitoryPageEntity.ChongNam;
import sejong.dormitory.domain.map.dormitoryPageService.ChongNamService;

import java.io.IOException;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class ChongNamController {
    private final ChongNamService chongNamService;
    @GetMapping("/chongnam")
    public String chongNam(Model model) throws IOException {
        List<ChongNam> dormitoryData = chongNamService.findFromDB();
        model.addAttribute("chongnamData", dormitoryData);
        return "dormitoryPage/chongnam";
    }
}
