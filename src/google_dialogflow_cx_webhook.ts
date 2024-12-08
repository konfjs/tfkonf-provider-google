import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDialogflowCxWebhookArgsGenericWebService {
  allowed_ca_certs?: string[];
  request_headers?: { [key: string]: string };
  uri: string;
}

export interface GoogleDialogflowCxWebhookArgsServiceDirectoryGenericWebService {
  allowed_ca_certs?: string[];
  request_headers?: { [key: string]: string };
  uri: string;
}

export interface GoogleDialogflowCxWebhookArgsServiceDirectory {
  service: string;
  generic_web_service: GoogleDialogflowCxWebhookArgsServiceDirectoryGenericWebService;
}

export interface GoogleDialogflowCxWebhookArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDialogflowCxWebhookArgs {
  disabled?: boolean;
  display_name: string;
  enable_spell_correction?: boolean;
  enable_stackdriver_logging?: boolean;
  parent?: string;
  security_settings?: string;
  timeout?: string;
  generic_web_service?: GoogleDialogflowCxWebhookArgsGenericWebService;
  service_directory?: GoogleDialogflowCxWebhookArgsServiceDirectory;
  timeouts?: GoogleDialogflowCxWebhookArgsTimeouts;
}

export class google_dialogflow_cx_webhook extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDialogflowCxWebhookArgs) {
    const meta = {generic_web_service:{isBlock:true},service_directory:{isBlock:true,generic_web_service:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dialogflow_cx_webhook", resourceName);
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get start_flow(): string {
    return `${this.resourceType}.${this.resourceName}.start_flow`;
  }
}
