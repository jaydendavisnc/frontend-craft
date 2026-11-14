// cutout.swift: lift the subject out of a photograph so type can sit behind it.
//   swift cutout.swift photo.jpg subject.png        macOS 14 or newer, on-device, no network
// Writes a transparent PNG the same size as the photo, so the two layers register exactly.
import Foundation
import Vision
import CoreImage
let a = CommandLine.arguments
guard a.count >= 3 else { print("usage: swift cutout.swift in.jpg out.png"); exit(2) }
guard let ci = CIImage(contentsOf: URL(fileURLWithPath: a[1])) else { print("cannot read \(a[1])"); exit(1) }
let req = VNGenerateForegroundInstanceMaskRequest()
let h = VNImageRequestHandler(ciImage: ci, options: [:])
do {
  try h.perform([req])
  guard let r = req.results?.first else { print("no clear subject: choose a photo with one subject against a calmer ground"); exit(3) }
  let px = try r.generateMaskedImage(ofInstances: r.allInstances, from: h, croppedToInstancesExtent: false)
  try CIContext().writePNGRepresentation(of: CIImage(cvPixelBuffer: px), to: URL(fileURLWithPath: a[2]), format: .RGBA8, colorSpace: CGColorSpaceCreateDeviceRGB())
  print("ok: \(r.allInstances.count) subject(s), \(Int(ci.extent.width)) by \(Int(ci.extent.height))")
} catch { print("failed: \(error)"); exit(4) }
