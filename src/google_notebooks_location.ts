import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNotebooksLocationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNotebooksLocationArgs {
  name?: string;
  timeouts?: GoogleNotebooksLocationArgsTimeouts;
}

export class google_notebooks_location extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNotebooksLocationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_notebooks_location", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }
}
