import type { Post } from "./posts";

type PostText = Pick<Post, "title" | "excerpt" | "sections"> & {
  visual?: string;
  sourceLabels: string[];
};

/** Vietnamese copy keyed by post slug. Posts without an entry fall back to English. */
export const postsVi: Record<string, PostText> = {
  "agents-found-a-new-enzyme-system": {
    title: "Các AI agent giúp tìm ra một hệ enzyme mới. Chức năng của nó vẫn chưa rõ.",
    excerpt:
      "Anthropic cho biết các agent Claude đã tìm trong cơ sở dữ liệu DNA và chọn ra ứng viên, sau đó phòng thí nghiệm mô tả đặc tính của chúng.",
    sections: [
      {
        heading: "Điều được báo cáo",
        body: "Anthropic cho biết một nhóm agent Claude đã tìm trong các cơ sở dữ liệu DNA lớn và thu hẹp hơn 200.000 reverse transcriptase xuống còn 20 ứng viên. Một trong số đó là hệ chưa từng được mô tả, được đặt tên là array-associated reverse transcriptases, tìm thấy ở bacteriophage và có các đoạn lặp giống CRISPR. Các nhà khoa học trong phòng thí nghiệm của Anthropic sau đó đã mô tả đặc tính sinh hóa của hệ protein này.",
      },
      {
        heading: "Điều chưa biết",
        body: "Các tác giả nói rõ đây mới là phát hiện ban đầu và chức năng của hệ này chưa được biết. Việc nó giống các công cụ sinh học lập trình được là lý do để nghiên cứu tiếp, chứ chưa phải một kết quả.",
      },
      {
        heading: "Vì sao điều này quan trọng với người xây sản phẩm",
        body: "Mô hình này đáng chú ý: agent sàng lọc rộng và rẻ, còn con người làm phần chậm và quyết định là kiểm nghiệm trong phòng thí nghiệm. Cách chia việc này, mô hình thu hẹp phạm vi tìm kiếm và con người xác minh, là thiết kế hợp lý cho nhiều sản phẩm, không riêng gì sinh học.",
      },
    ],
    sourceLabels: ["Anthropic — Claude discovers a novel enzyme system"],
  },
  "independent-evaluators-inside-the-lab": {
    title: "Các đánh giá viên độc lập sẽ làm việc bên trong một phòng nghiên cứu AI.",
    excerpt:
      "Anthropic và bộ phận Faculty của Accenture công bố hợp tác đánh giá nhúng cho các mô hình tiên phong.",
    sections: [
      {
        heading: "Điều được công bố",
        body: "Anthropic và Faculty, thuộc Accenture, dự định xây dựng năng lực đánh giá độc lập cho các hệ thống AI tiên phong. Hai bên cho biết kỳ vọng đầu tư ít nhất 1 tỷ USD trong năm năm. Công việc gồm red-teaming, đánh giá alignment, kiểm thử các biện pháp bảo vệ và đánh giá cách mô hình được phát triển, triển khai.",
      },
      {
        heading: "Điểm khác biệt",
        body: "Hầu hết đơn vị đánh giá bên ngoài chỉ thấy mô hình qua một giao diện. Ở đây, các đánh giá viên độc lập được mô tả là làm việc bên trong công ty với quyền truy cập như nhân viên, nên có thể quan sát quá trình huấn luyện, các quyết định và vận hành, xác minh cam kết an toàn và báo cáo sự cố.",
      },
      {
        heading: "Nên đọc thế nào",
        body: "Đây là thông báo của một công ty về kế hoạch của chính mình, nên phép thử thật sự là các đánh giá viên công bố gì và giữ được tính độc lập đến đâu trong thực tế. Với ai đang làm tính năng AI, bài học hữu ích nhỏ hơn: đánh giá hiệu quả nhất khi được đưa vào từ sớm, không phải thêm sau khi ra mắt.",
      },
    ],
    sourceLabels: ["Anthropic — Partnering with Accenture on embedded evaluation"],
  },
  "verified-access-for-life-sciences": {
    title: "Truy cập đã xác minh: biện pháp an toàn AI thích ứng theo người hỏi.",
    excerpt:
      "Anthropic giới thiệu chương trình cấp cho các nhóm sinh học đã được thẩm định quyền dùng mô hình với biện pháp bảo vệ phù hợp công việc của họ.",
    sections: [
      {
        heading: "Chương trình là gì",
        body: "Life Sciences Verification Program của Anthropic cấp cho phòng thí nghiệm học thuật, startup và nhóm dược phẩm quyền dùng các mô hình với biện pháp bảo vệ thoáng hơn cho công việc sinh học. Có hai loại cấp quyền: dùng tiêu chuẩn cho nghiên cứu thường quy, và dùng rủi ro cao cho các dự án có khả năng bị lạm dụng lớn hơn.",
      },
      {
        heading: "Các điều kiện",
        body: "Các tổ chức được xem xét về năng lực nghiên cứu, tiêu chuẩn bảo mật và giám sát đạo đức trước khi được tham gia. Việc sử dụng được giám sát theo mục đích đã nêu, dữ liệu được lưu giữ 30 ngày, và hoạt động trái phép phải được báo cáo trong khung thời gian đã thỏa thuận.",
      },
      {
        heading: "Ý tưởng thiết kế",
        body: "Một mức an toàn cố định hoặc chặn nhầm chuyên gia thật, hoặc để lọt quá nhiều. Gắn quyền truy cập với danh tính và mục đích đã xác minh là lối đi ở giữa. Đáng nhớ khi bạn quyết định tính năng AI nào trong sản phẩm của mình nên mở cho mọi người và tính năng nào nên có điều kiện.",
      },
    ],
    sourceLabels: ["Anthropic — Introducing the Life Sciences Verification Program"],
  },
  "attention-is-the-idea": {
    title: "Attention là ý tưởng đứng sau các mô hình ngôn ngữ hiện đại.",
    excerpt:
      "Đọc nhanh bài báo Transformer năm 2017 và ý nghĩa của nó với người xây sản phẩm trên LLM.",
    sections: [
      {
        heading: "Bài báo đã thay đổi điều gì",
        body: "Trước Transformer, hầu hết mô hình chuỗi đọc văn bản từng bước một. Bài báo “Attention Is All You Need” năm 2017 thay phần đệ quy đó bằng self-attention: mỗi token nhìn vào mọi token khác và quyết định token nào quan trọng. Vì các token có thể xử lý cùng lúc, việc huấn luyện song song hóa tốt, và đó là một phần lớn lý do mô hình sau này mở rộng được quy mô.",
      },
      {
        heading: "Vì sao điều này quan trọng khi bạn xây sản phẩm",
        body: "Attention chuẩn so sánh mỗi token với mọi token khác, nên chi phí tăng nhanh khi ngữ cảnh dài ra. Đó là lý do thực tế khiến prompt dài chậm và đắt hơn, và vì sao một ngữ cảnh nhỏ, chọn lọc kỹ thường tốt hơn một ngữ cảnh lớn.",
      },
      {
        heading: "Thử ngay",
        body: "Lấy một prompt bạn hay dùng và cắt còn những dòng thực sự đổi kết quả. So sánh chất lượng, độ trễ và chi phí trước và sau. Ngữ cảnh ngắn nhất mà vẫn chạy tốt thường là tốt nhất.",
      },
    ],
    sourceLabels: ["Attention Is All You Need — Vaswani và cộng sự, 2017"],
  },
  "retrieval-grounds-answers": {
    title: "Truy xuất là cách để mô hình ngôn ngữ bám vào sự thật.",
    excerpt:
      "Retrieval-augmented generation thực chất là gì, và một thói quen giúp nó chạy tốt trong sản phẩm.",
    sections: [
      {
        heading: "Ý tưởng",
        body: "Bài báo năm 2020 về retrieval-augmented generation kết hợp hai loại bộ nhớ: kiến thức nằm trong trọng số của mô hình, và một chỉ mục bên ngoài có thể tìm kiếm lúc trả lời. Với câu hỏi nặng kiến thức, mô hình đọc các đoạn đã truy xuất trước rồi mới viết câu trả lời dựa trên chúng.",
      },
      {
        heading: "Sản phẩm thường sai ở đâu",
        body: "Câu trả lời chỉ tốt bằng những gì đã truy xuất được. Khi một tính năng RAG gây thất vọng, nguyên nhân thường nằm ở bước tìm kiếm: chia đoạn kém, thiếu tài liệu, hoặc chỉ dùng một phương pháp truy xuất bỏ sót từ khóa chính xác. Kết hợp tìm kiếm từ khóa với tìm kiếm vector là cách phổ biến để bao phủ cả khớp chính xác lẫn khớp mờ.",
      },
      {
        heading: "Thử ngay",
        body: "Ghi log các đoạn đã truy xuất cạnh mỗi câu trả lời và đọc thử hai mươi cái. Sửa thứ được truy xuất hầu như luôn rẻ hơn đổi mô hình. Hiển thị nguồn cho người dùng để họ cũng kiểm tra được câu trả lời.",
      },
    ],
    sourceLabels: [
      "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks — Lewis và cộng sự, 2020",
    ],
  },
  "reasoning-out-loud": {
    title: "Yêu cầu mô hình nêu từng bước sẽ thay đổi kết quả.",
    excerpt:
      "Chain-of-thought prompting nói đơn giản: khi nào hữu ích, và vì sao bạn vẫn phải kiểm chứng.",
    sections: [
      {
        heading: "Các nhà nghiên cứu đã thấy gì",
        body: "Bài báo chain-of-thought năm 2022 cho thấy việc đưa cho mô hình ngôn ngữ lớn các ví dụ có kèm bước suy luận trung gian cải thiện kết quả ở các tác vụ số học, lẽ thường và ký hiệu. Hiệu quả được báo cáo chủ yếu ở mô hình lớn, không phải mô hình nhỏ.",
      },
      {
        heading: "Một thói quen hữu ích, không phải bằng chứng",
        body: "Viết ra các bước cho mô hình không gian để giải quyết vấn đề thay vì nhảy thẳng đến đáp án. Nhưng phần lập luận được viết ra vẫn chỉ là văn bản do mô hình sinh. Nó có thể trông thuyết phục mà vẫn sai, nên một lời giải thích gọn gàng không phải bằng chứng rằng đáp án đúng.",
      },
      {
        heading: "Thử ngay",
        body: "Với tác vụ nhiều bước, hãy yêu cầu nêu các bước rồi kiểm tra đáp án cuối một cách độc lập: chạy code, tính lại con số hoặc đối chiếu nguồn. Coi phần lập luận như bản nháp cần rà soát.",
      },
    ],
    sourceLabels: [
      "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models — Wei và cộng sự, 2022",
    ],
  },
  "ai-where-you-work": {
    title: "AI hữu ích hơn khi nằm ngay nơi công việc diễn ra.",
    excerpt:
      "Nhìn vào JInk và ý tưởng đưa một công cụ AI nhỏ vào chính những ứng dụng bạn đang dùng.",
    sections: [
      {
        heading: "Bắt đầu từ ô nhập văn bản",
        body: "Một tương tác AI hữu ích không phải lúc nào cũng cần một nơi mới để đến. Viết email, dịch một câu hay chỉnh một tin nhắn ngắn thường bắt đầu ngay trong một ứng dụng khác. Một tiện ích nhỏ có thể gặp bạn đúng chỗ đó, thay vì bắt bạn mở một cửa sổ chat riêng.",
      },
      {
        heading: "Cách tiếp cận của JInk",
        body: "JInk là công cụ nhập nhanh trên desktop. Một phím tắt toàn cục mở ra trình soạn thảo nhỏ; văn bản có thể được dịch, trau chuốt qua endpoint tương thích OpenAI hoặc đọc bằng giọng nói, rồi chèn ngược vào ứng dụng đang được focus. Quyết định sản phẩm thú vị nằm ở kích thước của tương tác: một đoạn văn bản và một kết thúc rõ ràng.",
      },
      {
        heading: "Làm rõ bước bàn giao",
        body: "Với loại công cụ này, người dùng nên xem được gợi ý trước khi nó thay thế phần họ viết. Việc chọn nhà cung cấp và hành vi chèn văn bản rõ ràng quan trọng không kém khả năng của mô hình. Sản phẩm là toàn bộ tương tác, bao gồm cả việc quay lại công việc ban đầu.",
      },
    ],
    sourceLabels: ["JInk — mã nguồn và tài liệu dự án"],
  },
  "one-workspace-many-processes": {
    title: "Một workspace. Nhiều tiến trình. Ít vướng víu hơn.",
    excerpt:
      "Vì sao một công cụ quản lý tiến trình cục bộ nên có trong bộ đồ nghề hằng ngày của lập trình viên.",
    sections: [
      {
        heading: "Một sản phẩm hiếm khi chỉ có một tiến trình",
        body: "Môi trường phát triển cục bộ thường có frontend, API và một worker nền. Mở terminal thì dễ. Nhưng nhớ tiến trình nào giữ cổng nào, lệnh nào khởi động dịch vụ nào và lỗi xuất hiện ở đâu lại lấy mất sự chú ý khỏi sản phẩm.",
      },
      {
        heading: "Đặt workspace vào một tệp",
        body: "procman là công cụ quản lý tiến trình viết bằng Rust, xây quanh cấu hình workspace và bảng điều khiển terminal trực tiếp. Gom các lệnh dịch vụ lại một chỗ giúp môi trường phát triển dễ hiểu và dễ lặp lại hơn. Cấu hình trở thành một phần của dự án thay vì những mảnh vụn trong lịch sử shell.",
      },
      {
        heading: "Công cụ nên rút ngắn vòng phản hồi",
        body: "Câu hỏi hữu ích không phải bảng điều khiển có bao nhiêu nút. Mà là lập trình viên nhìn thấy cái gì đang chạy, tìm ra dịch vụ lỗi và quay lại làm việc nhanh đến mức nào. Log, trạng thái tiến trình và mức dùng tài nguyên cung cấp ngữ cảnh mà không cần một công cụ khác cho mỗi câu hỏi.",
      },
    ],
    sourceLabels: ["procman — mã nguồn"],
  },
  "products-are-workflows": {
    title: "Hãy xây quy trình, không chỉ màn hình.",
    excerpt:
      "Phần mềm thương mại điện tử và phần mềm đại học giống nhau ở chỗ nào: công việc nằm giữa các giao diện.",
    sections: [
      {
        heading: "Nhìn xa hơn tương tác đầu tiên",
        body: "Cửa hàng chỉ là một phần của thương mại điện tử. Một đơn hàng trở thành công việc kho, vận chuyển và chăm sóc khách hàng. Tương tự, một biểu mẫu học phần của trường đại học thuộc về quy trình rộng hơn gồm chuẩn bị, rà soát và phê duyệt. Một màn hình thuyết phục chỉ là khởi đầu; quy trình liền mạch mới biến nó thành sản phẩm.",
      },
      {
        heading: "Hai ví dụ trong portfolio",
        body: "Necom kết nối việc duyệt sản phẩm với kho, đơn hàng, khách hàng và vận hành kinh doanh. OpenPKA kết nối chương trình đào tạo với nhân sự, tổ chức, tài chính và hồ sơ sinh viên. Người dùng khác nhau, nhưng cả hai đều phụ thuộc vào mối quan hệ rõ ràng giữa các phần của hệ thống.",
      },
      {
        heading: "Lần theo một tác vụ thực tế",
        body: "Khi định hình sản phẩm, hãy lần theo một tác vụ từ đầu vào đến kết quả cuối. Xác định ai hành động tiếp theo, họ cần thông tin gì và điều gì xảy ra khi một bước thất bại. Cách này cho thiết kế giao diện và kỹ thuật một đối tượng chung để làm việc: một tác vụ mà con người thực sự hoàn thành được.",
      },
    ],
    sourceLabels: ["Necom — tổng quan dự án", "OpenPKA — tổng quan dự án"],
  },
};
