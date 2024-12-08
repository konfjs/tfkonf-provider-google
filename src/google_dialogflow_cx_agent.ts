import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDialogflowCxAgentArgsAdvancedSettingsAudioExportGcsDestination {
  uri?: string;
}

export interface GoogleDialogflowCxAgentArgsAdvancedSettingsDtmfSettings {
  enabled?: boolean;
  finish_digit?: string;
  max_digits?: number;
}

export interface GoogleDialogflowCxAgentArgsAdvancedSettingsLoggingSettings {
  enable_consent_based_redaction?: boolean;
  enable_interaction_logging?: boolean;
  enable_stackdriver_logging?: boolean;
}

export interface GoogleDialogflowCxAgentArgsAdvancedSettingsSpeechSettings {
  endpointer_sensitivity?: number;
  models?: { [key: string]: string };
  no_speech_timeout?: string;
  use_timeout_based_endpointing?: boolean;
}

export interface GoogleDialogflowCxAgentArgsAdvancedSettings {
  audio_export_gcs_destination?: GoogleDialogflowCxAgentArgsAdvancedSettingsAudioExportGcsDestination;
  dtmf_settings?: GoogleDialogflowCxAgentArgsAdvancedSettingsDtmfSettings;
  logging_settings?: GoogleDialogflowCxAgentArgsAdvancedSettingsLoggingSettings;
  speech_settings?: GoogleDialogflowCxAgentArgsAdvancedSettingsSpeechSettings;
}

export interface GoogleDialogflowCxAgentArgsGitIntegrationSettingsGithubSettings {
  access_token?: string;
  branches?: string[];
  display_name?: string;
  repository_uri?: string;
  tracking_branch?: string;
}

export interface GoogleDialogflowCxAgentArgsGitIntegrationSettings {
  github_settings?: GoogleDialogflowCxAgentArgsGitIntegrationSettingsGithubSettings;
}

export interface GoogleDialogflowCxAgentArgsSpeechToTextSettings {
  enable_speech_adaptation?: boolean;
}

export interface GoogleDialogflowCxAgentArgsTextToSpeechSettings {
  synthesize_speech_configs?: string;
}

export interface GoogleDialogflowCxAgentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDialogflowCxAgentArgs {
  avatar_uri?: string;
  default_language_code: string;
  description?: string;
  display_name: string;
  enable_spell_correction?: boolean;
  enable_stackdriver_logging?: boolean;
  location: string;
  security_settings?: string;
  supported_language_codes?: string[];
  time_zone: string;
  advanced_settings?: GoogleDialogflowCxAgentArgsAdvancedSettings;
  git_integration_settings?: GoogleDialogflowCxAgentArgsGitIntegrationSettings;
  speech_to_text_settings?: GoogleDialogflowCxAgentArgsSpeechToTextSettings;
  text_to_speech_settings?: GoogleDialogflowCxAgentArgsTextToSpeechSettings;
  timeouts?: GoogleDialogflowCxAgentArgsTimeouts;
}

export class google_dialogflow_cx_agent extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDialogflowCxAgentArgs) {
    const meta = {advanced_settings:{isBlock:true,audio_export_gcs_destination:{isBlock:true},dtmf_settings:{isBlock:true},logging_settings:{isBlock:true},speech_settings:{isBlock:true}},git_integration_settings:{isBlock:true,github_settings:{isBlock:true}},speech_to_text_settings:{isBlock:true},text_to_speech_settings:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dialogflow_cx_agent", resourceName);
  }

  get default_language_code(): string {
    return `${this.resourceType}.${this.resourceName}.default_language_code`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
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

  get start_flow(): string {
    return `${this.resourceType}.${this.resourceName}.start_flow`;
  }

  get time_zone(): string {
    return `${this.resourceType}.${this.resourceName}.time_zone`;
  }
}
