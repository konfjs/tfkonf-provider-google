import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeSharedflowDeploymentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleApigeeSharedflowDeploymentArgs {
  environment: string;
  org_id: string;
  revision: string;
  service_account?: string;
  sharedflow_id: string;
  timeouts?: GoogleApigeeSharedflowDeploymentArgsTimeouts;
}

export class google_apigee_sharedflow_deployment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleApigeeSharedflowDeploymentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_sharedflow_deployment", resourceName);
  }

  get environment(): string {
    return `${this.resourceType}.${this.resourceName}.environment`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get revision(): string {
    return `${this.resourceType}.${this.resourceName}.revision`;
  }

  get sharedflow_id(): string {
    return `${this.resourceType}.${this.resourceName}.sharedflow_id`;
  }
}
