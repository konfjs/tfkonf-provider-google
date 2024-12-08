import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleTranscoderJobArgsConfigAdBreaks {
}

export interface GoogleTranscoderJobArgsConfigEditList {
}

export interface GoogleTranscoderJobArgsConfigElementaryStreamsAudioStream {
  bitrate_bps: number;
}

export interface GoogleTranscoderJobArgsConfigElementaryStreamsVideoStreamH264Hlg {
}

export interface GoogleTranscoderJobArgsConfigElementaryStreamsVideoStreamH264Sdr {
}

export interface GoogleTranscoderJobArgsConfigElementaryStreamsVideoStreamH264 {
  bitrate_bps: number;
  frame_rate: number;
  hlg?: GoogleTranscoderJobArgsConfigElementaryStreamsVideoStreamH264Hlg;
  sdr?: GoogleTranscoderJobArgsConfigElementaryStreamsVideoStreamH264Sdr;
}

export interface GoogleTranscoderJobArgsConfigElementaryStreamsVideoStream {
  h264?: GoogleTranscoderJobArgsConfigElementaryStreamsVideoStreamH264;
}

export interface GoogleTranscoderJobArgsConfigElementaryStreams {
  audio_stream?: GoogleTranscoderJobArgsConfigElementaryStreamsAudioStream;
  video_stream?: GoogleTranscoderJobArgsConfigElementaryStreamsVideoStream;
}

export interface GoogleTranscoderJobArgsConfigEncryptionsAes128 {
}

export interface GoogleTranscoderJobArgsConfigEncryptionsDrmSystemsClearkey {
}

export interface GoogleTranscoderJobArgsConfigEncryptionsDrmSystemsFairplay {
}

export interface GoogleTranscoderJobArgsConfigEncryptionsDrmSystemsPlayready {
}

export interface GoogleTranscoderJobArgsConfigEncryptionsDrmSystemsWidevine {
}

export interface GoogleTranscoderJobArgsConfigEncryptionsDrmSystems {
  clearkey?: GoogleTranscoderJobArgsConfigEncryptionsDrmSystemsClearkey;
  fairplay?: GoogleTranscoderJobArgsConfigEncryptionsDrmSystemsFairplay;
  playready?: GoogleTranscoderJobArgsConfigEncryptionsDrmSystemsPlayready;
  widevine?: GoogleTranscoderJobArgsConfigEncryptionsDrmSystemsWidevine;
}

export interface GoogleTranscoderJobArgsConfigEncryptionsMpegCenc {
  scheme: string;
}

export interface GoogleTranscoderJobArgsConfigEncryptionsSampleAes {
}

export interface GoogleTranscoderJobArgsConfigEncryptionsSecretManagerKeySource {
  secret_version: string;
}

export interface GoogleTranscoderJobArgsConfigEncryptions {
  id: string;
  aes128?: GoogleTranscoderJobArgsConfigEncryptionsAes128;
  drm_systems?: GoogleTranscoderJobArgsConfigEncryptionsDrmSystems;
  mpeg_cenc?: GoogleTranscoderJobArgsConfigEncryptionsMpegCenc;
  sample_aes?: GoogleTranscoderJobArgsConfigEncryptionsSampleAes;
  secret_manager_key_source?: GoogleTranscoderJobArgsConfigEncryptionsSecretManagerKeySource;
}

export interface GoogleTranscoderJobArgsConfigInputs {
}

export interface GoogleTranscoderJobArgsConfigManifests {
}

export interface GoogleTranscoderJobArgsConfigMuxStreamsSegmentSettings {
}

export interface GoogleTranscoderJobArgsConfigMuxStreams {
  segment_settings?: GoogleTranscoderJobArgsConfigMuxStreamsSegmentSettings;
}

export interface GoogleTranscoderJobArgsConfigOutput {
}

export interface GoogleTranscoderJobArgsConfigOverlaysAnimationsAnimationFadeXy {
}

export interface GoogleTranscoderJobArgsConfigOverlaysAnimationsAnimationFade {
  fade_type: string;
  xy?: GoogleTranscoderJobArgsConfigOverlaysAnimationsAnimationFadeXy;
}

export interface GoogleTranscoderJobArgsConfigOverlaysAnimations {
  animation_fade?: GoogleTranscoderJobArgsConfigOverlaysAnimationsAnimationFade;
}

export interface GoogleTranscoderJobArgsConfigOverlaysImage {
  uri: string;
}

export interface GoogleTranscoderJobArgsConfigOverlays {
  animations?: GoogleTranscoderJobArgsConfigOverlaysAnimations[];
  image?: GoogleTranscoderJobArgsConfigOverlaysImage;
}

export interface GoogleTranscoderJobArgsConfigPubsubDestination {
  topic?: string;
}

export interface GoogleTranscoderJobArgsConfig {
  ad_breaks?: GoogleTranscoderJobArgsConfigAdBreaks[];
  edit_list?: GoogleTranscoderJobArgsConfigEditList[];
  elementary_streams?: GoogleTranscoderJobArgsConfigElementaryStreams[];
  encryptions?: GoogleTranscoderJobArgsConfigEncryptions[];
  inputs?: GoogleTranscoderJobArgsConfigInputs[];
  manifests?: GoogleTranscoderJobArgsConfigManifests[];
  mux_streams?: GoogleTranscoderJobArgsConfigMuxStreams[];
  output?: GoogleTranscoderJobArgsConfigOutput;
  overlays?: GoogleTranscoderJobArgsConfigOverlays[];
  pubsub_destination?: GoogleTranscoderJobArgsConfigPubsubDestination;
}

export interface GoogleTranscoderJobArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleTranscoderJobArgs {
  labels?: { [key: string]: string };
  location: string;
  config?: GoogleTranscoderJobArgsConfig;
  timeouts?: GoogleTranscoderJobArgsTimeouts;
}

export class google_transcoder_job extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleTranscoderJobArgs) {
    const meta = {config:{isBlock:true,ad_breaks:{isBlock:true},edit_list:{isBlock:true},elementary_streams:{isBlock:true,audio_stream:{isBlock:true},video_stream:{isBlock:true,h264:{isBlock:true,hlg:{isBlock:true},sdr:{isBlock:true}}}},encryptions:{isBlock:true,aes128:{isBlock:true},drm_systems:{isBlock:true,clearkey:{isBlock:true},fairplay:{isBlock:true},playready:{isBlock:true},widevine:{isBlock:true}},mpeg_cenc:{isBlock:true},sample_aes:{isBlock:true},secret_manager_key_source:{isBlock:true}},inputs:{isBlock:true},manifests:{isBlock:true},mux_streams:{isBlock:true,segment_settings:{isBlock:true}},output:{isBlock:true},overlays:{isBlock:true,animations:{isBlock:true,animation_fade:{isBlock:true,xy:{isBlock:true}}},image:{isBlock:true}},pubsub_destination:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_transcoder_job", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get end_time(): string {
    return `${this.resourceType}.${this.resourceName}.end_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get start_time(): string {
    return `${this.resourceType}.${this.resourceName}.start_time`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get template_id(): string {
    return `${this.resourceType}.${this.resourceName}.template_id`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
