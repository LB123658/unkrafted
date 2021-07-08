import Cocoa
import WebKit

class ViewController: NSViewController {

    var loginWebView: WKWebView!

    override func viewDidLoad()
    {
        super.viewDidLoad()

        self.loginWebView = WKWebView(frame: self.view.frame)

        self.view.addSubview(loginWebView)

        let urlReq = URLRequest(url: URL(string: "https://lb123658.github.io/unkrafted?game=playing")!)

        self.loginWebView.load(urlReq)


        // Do any additional setup after loading the view.
    }

    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
        }
    }
}
