import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBeyondcorpAppConnectorArgsPrincipalInfoServiceAccount {
  email: string;
}

export interface GoogleBeyondcorpAppConnectorArgsPrincipalInfo {
  service_account: GoogleBeyondcorpAppConnectorArgsPrincipalInfoServiceAccount;
}

export interface GoogleBeyondcorpAppConnectorArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBeyondcorpAppConnectorArgs {
  display_name?: string;
  labels?: { [key: string]: string };
  name: string;
  region?: string;
  principal_info: GoogleBeyondcorpAppConnectorArgsPrincipalInfo;
  timeouts?: GoogleBeyondcorpAppConnectorArgsTimeouts;
}

export class google_beyondcorp_app_connector extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBeyondcorpAppConnectorArgs) {
    const meta = {principal_info:{isBlock:true,service_account:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_beyondcorp_app_connector", resourceName);
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
